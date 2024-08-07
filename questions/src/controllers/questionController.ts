import { Questions } from "@/models";

export async function addQuestion(body: any) {
  try {
    const newQuestion = new Questions(body);

    await newQuestion.save();
    return { success: true, message: "Question added successfully" };
  } catch (error: any) {
    console.error("Error adding question:", error);
    return { success: false, message: "Failed to add question" };
  }
}
