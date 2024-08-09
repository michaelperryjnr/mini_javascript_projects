import { Document } from "mongoose";

interface IQuestion extends Document {
    username: string;
    question: string;
}


export default IQuestion;