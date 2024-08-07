import { IQuestion } from "@/interfaces";
import mongoose, {Schema} from "mongoose";

const QuestionSchema:Schema = new Schema<IQuestion>({
    username: {type: String, unique: true, required: true},
    question: {type: String, required: true}
}, {
    timestamps: true,
})

const Questions = mongoose.models.Questions || mongoose.model('Questions', QuestionSchema);


export default Questions
