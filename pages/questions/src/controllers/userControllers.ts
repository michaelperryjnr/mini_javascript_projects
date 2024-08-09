import { BBFUser } from "@/models";

export async function addUser(body: any) {
  try {
    const user = await BBFUser.create(body);
    return { success: true, message: "User added successfully" };
  } catch (error: any) {
    console.error("Error adding user:", error);
    return { success: false, message: "Failed to add user" };
  }
}

export async function updateUserScores(username: string, score: number) {
  try {
    const user = await BBFUser.findOne({ username });
    user.scores.push(score);
    await user.save();
    return { success: true, message: "User scores updated successfully" };
  } catch (err: any) {
    console.error("Error updating user scores:", err);
    return { success: false, message: "Failed to update user scores" };
  }
}

export async function getUserScores(username: string) {
  try {
    const user = await BBFUser.findOne({ username });
    return user.scores;
  } catch (error: any) {
    console.error("Error getting user scores:", error);
    return { success: false, message: "Failed to get user scores" };
  }
}
