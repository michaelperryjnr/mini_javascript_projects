import { IUser } from "@/interfaces";
import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema(
  {
    username: { type: String, required: true },
    scores: { type: Array, required: true },
  },
  {
    timestamps: true,
  }
);

console.log("Checking existing models:", mongoose.models);
const BBFUser =
  mongoose.models.BBFUser || mongoose.model("BBFUser", UserSchema);

if (!BBFUser) {
  console.error("BBF User model is not defined");
}

export default BBFUser;
