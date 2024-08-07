import { NextResponse } from "next/server";
import Questions from "@/models/Question";
import { User } from "@/controllers";
import { connectToDb } from "@/db";

export async function GET(request: Request) {
  await connectToDb();
  const questions = await Questions.find({}).sort({ createdAt: -1 });
  console.log(questions);
  return NextResponse.json({ questions });
}
