import mongoose from "mongoose";
import { MONGO_URI } from "@/core";

export async function connectToDb() {
  try {
    await mongoose.connect(MONGO_URI);

    return { mongoose };
  } catch (error: any) {
    console.log("Error connecting to db", error.message);
    throw error;
  }
}
