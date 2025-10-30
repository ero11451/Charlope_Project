import { NextRequest, NextResponse } from "next/server";
import db from "../../../../lib/db";

// GET all causes
export async function GET() {
  const causes = db.prepare("SELECT * FROM Causes").all();
  return NextResponse.json(causes);
}

// POST create a new cause
export async function POST(req:NextRequest) {
  const body = await req.json();
  const { title, description, category, percentage, raised, goal } = body;

  if (!title || !description) {
    return NextResponse.json(
      { error: "Title and description are required" },
      { status: 400 }
    );
  }

  const stmt = db.prepare(
    "INSERT INTO Causes (title, description, category, percentage, raised, goal) VALUES (?, ?, ?, ?, ?, ?)"
  );
  const info = stmt.run(title, description, category || "", percentage || "", raised || "", goal || "");

  return NextResponse.json({ id: info.lastInsertRowid, ...body });
}

// PUT update a cause
export async function PUT(req: NextRequest) {
  const body = await req.json();
  const { id, title, description, category, percentage, raised, goal } = body;

  if (!id || !title || !description) {
    return NextResponse.json(
      { error: "ID, title, and description are required" },
      { status: 400 }
    );
  }

  const stmt = db.prepare(
    "UPDATE Causes SET title = ?, description = ?, category = ?, percentage = ?, raised = ?, goal = ? WHERE id = ?"
  );
  stmt.run(title, description, category, percentage, raised, goal, id);

  return NextResponse.json({ id, title, description, category, percentage, raised, goal });
}

// DELETE a cause
export async function DELETE(req: any) {
  const body = await req.json();
  const { id } = body;

  if (!id) {
    return NextResponse.json({ error: "ID is required" }, { status: 400 });
  }

  const stmt = db.prepare("DELETE FROM Causes WHERE id = ?");
  stmt.run(id);

  return NextResponse.json({ id });
}
