import { Router } from "express";
import {
  getTopic,
  getTopics,
  addTopic,
  updateTopic,
  deleteTopic
} from "../controllers/topic.controller";

const topicRoutes: Router = Router();

topicRoutes.get("/topic", getTopics);
topicRoutes.post("/topic", addTopic);
topicRoutes.put("/topic/:id", updateTopic);
topicRoutes.delete("/topic/:id", deleteTopic);
topicRoutes.get("/topic/:id", getTopic);

export default topicRoutes;
