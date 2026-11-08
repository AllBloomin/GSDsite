import { neon } from "@neondatabase/serverless";
import { NextResponse } from "next/server";

export async function POST() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    return NextResponse.json({ error: "DATABASE_URL is not set" }, { status: 500 });
  }
  const sql = neon(connectionString);
  const deleted = await sql`
    DELETE FROM signups
    WHERE email IN (
      'test+deploycheck@gsdbots.com',
      'test+deploycheck@gmail.com'
    )
    RETURNING email
  `;
  return NextResponse.json({
    deleted: deleted.map((row) => row.email),
  });
}
