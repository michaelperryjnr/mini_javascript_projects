import { IQuestion } from "@/interfaces";
import mongoose, { Schema } from "mongoose";

const QuestionSchema: Schema<IQuestion> = new Schema(
  {
    username: { type: String, required: true },
    question: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

console.log("Checking existing models:", mongoose.models);
const Questions =
  mongoose.models.Questions || mongoose.model("Questions", QuestionSchema);

if (!Questions) {
  console.error("Questions model is not defined");
}

export default Questions;
