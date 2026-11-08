import { neon } from "@neondatabase/serverless";

const MAX_USER_AGENT_LENGTH = 512;

function database() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error("DATABASE_URL is not set");
  }
  return neon(connectionString);
}

let tableReady: Promise<void> | null = null;

async function ensureSignupsTable() {
  if (!tableReady) {
    const sql = database();
    tableReady = sql`
      CREATE TABLE IF NOT EXISTS signups (
        id serial PRIMARY KEY,
        email text UNIQUE NOT NULL,
        created_at timestamptz NOT NULL DEFAULT now(),
        source text,
        user_agent text,
        ip_country text
      )
    `
      .then(() => undefined)
      .catch((error: unknown) => {
        tableReady = null;
        throw error;
      });
  }
  await tableReady;
}

export async function insertSignup(input: {
  email: string;
  source: string;
  userAgent: string | null;
  ipCountry: string | null;
}) {
  await ensureSignupsTable();
  const sql = database();
  await sql`
    INSERT INTO signups (email, source, user_agent, ip_country)
    VALUES (
      ${input.email},
      ${input.source},
      ${input.userAgent},
      ${input.ipCountry}
    )
    ON CONFLICT (email) DO NOTHING
  `;
}

export function clipUserAgent(value: string | null) {
  if (!value) {
    return null;
  }
  const trimmed = value.trim();
  if (!trimmed) {
    return null;
  }
  return trimmed.slice(0, MAX_USER_AGENT_LENGTH);
}

export function clipCountry(value: string | null) {
  if (!value) {
    return null;
  }
  const trimmed = value.trim();
  if (!trimmed) {
    return null;
  }
  return trimmed.slice(0, 8);
}
