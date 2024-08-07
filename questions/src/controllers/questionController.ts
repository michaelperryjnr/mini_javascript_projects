import { Questions } from "@/models";

export async function addQuestion(body: any) {
  try {
    const question = await Questions.create(body);
    return { success: true, message: "Question added successfully" };
  } catch (error: any) {
    console.error("Error adding question:", error);
    return { success: false, message: "Failed to add question" };
  }
}
