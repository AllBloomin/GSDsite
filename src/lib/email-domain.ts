import { resolve4, resolveMx } from "node:dns/promises";

const LOOKUP_TIMEOUT_MS = 2000;

type LookupResult<T> =
  | { status: "records"; records: T[] }
  | { status: "none" }
  | { status: "error" };

function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
  void promise.catch(() => undefined);
  let timer: ReturnType<typeof setTimeout> | undefined;
  const timeout = new Promise<never>((_, reject) => {
    timer = setTimeout(() => {
      const error = new Error("DNS lookup timed out") as NodeJS.ErrnoException;
      error.code = "ETIMEOUT";
      reject(error);
    }, ms);
  });
  return Promise.race([promise, timeout]).finally(() => {
    if (timer) {
      clearTimeout(timer);
    }
  });
}

function classify(error: unknown): "none" | "error" {
  const code = (error as NodeJS.ErrnoException | undefined)?.code;
  if (code === "ENOTFOUND" || code === "ENODATA" || code === "ENOTIMP") {
    return "none";
  }
  return "error";
}

async function lookup<T>(query: () => Promise<T[]>): Promise<LookupResult<T>> {
  try {
    const records = await withTimeout(query(), LOOKUP_TIMEOUT_MS);
    if (records.length === 0) {
      return { status: "none" };
    }
    return { status: "records", records };
  } catch (error) {
    const kind = classify(error);
    return kind === "none" ? { status: "none" } : { status: "error" };
  }
}

/** Accept when mail DNS is present, or when the lookup is inconclusive. */
export async function domainCanReceiveMail(domain: string): Promise<boolean> {
  const mx = await lookup(() => resolveMx(domain));
  if (mx.status === "records" || mx.status === "error") {
    return true;
  }

  const address = await lookup(() => resolve4(domain));
  if (address.status === "records" || address.status === "error") {
    return true;
  }
  return false;
}
