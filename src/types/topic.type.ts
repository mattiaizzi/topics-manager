import { Document } from "mongoose";

export interface ITopic extends Document {
    key: string;
    name : string;
    messageType : string;
}
