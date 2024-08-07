import { NextResponse } from "next/server";
import { User } from "@/controllers";
import { connectToDb } from "@/db";

export async function GET(request: Request) {
  await connectToDb();
  try {
    const body = await request.json();
    const userScores = await User.getUserScores(body.username);
    return NextResponse.json({ userScores });
  } catch (error: any) {
    return NextResponse.json({ error: "Error getting user scores" });
  }
}

export async function POST(request: Request) {
  await connectToDb();
  try {
    const body = await request.json();
    const newUser = await User.addUser(body);
    return NextResponse.json(newUser);
  } catch (error: any) {
    return NextResponse.json({ error: "Error adding user" });
  }
}

export async function PUT(request: Request) {
  await connectToDb();
  try {
    const body = await request.json();
    const updatedUserScores = await User.updateUserScores(
      body.username,
      body.score
    );
    return NextResponse.json(updatedUserScores);
  } catch (error: any) {
    return NextResponse.json({ error: "Error updating user scores" });
  }
}
