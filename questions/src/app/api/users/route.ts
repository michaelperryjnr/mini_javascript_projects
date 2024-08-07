import { NextResponse } from "next/server";
import { User } from "@/controllers";
import { connectToDb } from "@/db";

export async function GET(request: Request) {
  await connectToDb();
  try {
    const body = await request.json();
    const userScores = await User.getUserScores(body.username);
    return NextResponse.json(
      { userScores },
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
      }
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: "Error getting user scores" },
      {
        status: 500,
        headers: { "Access-Control-Allow-Origin": "*" },
      }
    );
  }
}

export async function POST(request: Request) {
  await connectToDb();
  try {
    const body = await request.json();
    const newUser = await User.addUser(body);
    return NextResponse.json(newUser, {
      status: 201,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: "Error adding user" },
      {
        status: 500,
        headers: { "Access-Control-Allow-Origin": "*" },
      }
    );
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
    return NextResponse.json(updatedUserScores, {
      status: 204,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: "Error updating user scores" },
      {
        status: 500,
        headers: { "Access-Control-Allow-Origin": "*" },
      }
    );
  }
}
