import { NextResponse } from "next/server";
import Questions from "@/models/Question";
import { User } from "@/controllers";
import { connectToDb } from "@/db";

export async function GET(request: Request) {
  await connectToDb();
  const questions = await Questions.find();
  console.log(questions);
  return NextResponse.json({ questions });
}

export async function POST(request: Request) {
  await connectToDb();
  try {
    const body = await request.json();
    const newQuestion = await User.addQuestion(body);
    return NextResponse.json(newQuestion);
  } catch (err: any) {
    return NextResponse.json({ error: "Error adding question" });
  }
}
