
import { NextResponse, type NextRequest as INextRequest } from "next/server";
import db from "../../../../lib/db";

export async function GET() {
    const stmt = db.prepare("SELECT * FROM Contacts ORDER BY created_at DESC");
    const messages = stmt.all();
    return NextResponse.json(messages);
  }

export async function POST(req:INextRequest) {
  const body = await req.json();
  const { full_name, email, phone_number, message } = body;

  if (!full_name || !email || !phone_number) {
    return NextResponse.json(
      { error: "Name, email, and phone are required" },
      { status: 400 }
    );
  }

  const stmt = db.prepare(`
    INSERT INTO Contacts (full_name, email, phone_number, message)
    VALUES (?, ?, ?, ?)
  `);
  const info = stmt.run(full_name, email, phone_number, message || "");

  return NextResponse.json({
    id: info.lastInsertRowid,
    full_name,
    email,
    phone_number,
    message,
  });
}
