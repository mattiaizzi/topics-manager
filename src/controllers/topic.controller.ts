import { Response, Request } from "express";
import { ITopic } from "../types/topic.type";
import Topic from "../models/topic.model";

const getTopics = async (req: Request, res: Response): Promise<void> => {
    try {
        const topics: ITopic[] = await Topic.find();
        res.status(200).json({ topics });
    } catch (error) {
        throw error;
    }
};

const addTopic = async (req: Request, res: Response): Promise<void> => {
    try {
        const body = req.body as Pick<ITopic, "name" | "key" | "messageType">;
        const topic: ITopic = new Topic({
            key: body.key,
            name: body.name,
            messageType: body.messageType,
        });

        const savedTopic: ITopic = await topic.save();

        res.status(201).json(savedTopic);
    } catch (error) {
        throw error;
    }
};

const getTopic = async (req: Request, res: Response): Promise<void> => {
    try {
        const {
            params: { id },
        } = req;
        const topic: ITopic | null = await Topic.findById({ _id: id });

        res.status(topic ? 200 : 404).json({ topic });
    } catch (error) {
        throw error;
    }
};

const updateTopic = async (req: Request, res: Response): Promise<void> => {
    try {
        const {
            params: { id },
            body,
        } = req;

        const updatedTopic: ITopic | null = await Topic.findByIdAndUpdate(
            { _id: id },
            body
        );

        res.status(updatedTopic ? 200 : 404).json({
            topic: updatedTopic,
        });
    } catch (error) {
        throw error;
    }
};

const deleteTopic = async (req: Request, res: Response): Promise<void> => {
    try {
        const deletedTopic: ITopic | null = await Topic.findByIdAndRemove(
            req.params.id
        );
        res.status(204).json({
            deletedTopic
        });
    } catch (error) {
        throw error;
    }
};

export {
    getTopic,
    getTopics,
    addTopic,
    updateTopic,
    deleteTopic
};
