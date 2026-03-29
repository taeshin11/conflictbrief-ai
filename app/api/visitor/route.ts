import { NextResponse } from "next/server";
import { incrementVisitor } from "@/lib/visitor";

export async function POST() {
  const counts = incrementVisitor();
  return NextResponse.json(counts);
}
