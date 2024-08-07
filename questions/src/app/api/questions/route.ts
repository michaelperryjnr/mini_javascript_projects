import { NextResponse } from "next/server";
import Questions from "@/models/Question";
import { User } from "@/controllers";
import { connectToDb } from "@/db";


export async function GET(request: Request) {
  await connectToDb();
  const questions = await Questions.find();
  return NextResponse.json({ questions });
}

export async function POST(request: Request) {
  await connectToDb();
  const body = await request.json();
  const newQuestion = User.addQuestion(body)
  return NextResponse.json({ message: "Question created successfully" });
}
