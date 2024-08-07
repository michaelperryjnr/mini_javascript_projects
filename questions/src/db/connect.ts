import mongoose from "mongoose";
import { MONGO_URI } from "@/core";

export async function connectToDb() {
  if (mongoose.connection.readyState >= 1) return;

  return await mongoose.connect(MONGO_URI);
}
