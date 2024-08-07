import { Questions } from "@/models";
import { connectToDb } from "@/db";

export async function addQuestion(username: string, question: string) {
    try {
        await connectToDb();

        const newQuestion = new Questions({
            username,
            question
        })

        await newQuestion.save();
        return {success: true, message: "Question added successfully"}
    } catch (error: any) {
        console.error("Error adding question:", error);
        return { success: false, message: "Failed to add question" };
    }
}