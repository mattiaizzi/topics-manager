import { model, Schema } from "mongoose";
import { ITopic } from "../types/topic.type";

const topicSchema: Schema = new Schema(
    {
        key: {
            type: String,
            required: true,
            unique: true,
        },
        name: {
            type: String,
            required: true,
        },
        messageType: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

export default model<ITopic>("Topics", topicSchema);
