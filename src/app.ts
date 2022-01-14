import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import topicRoutes from "./routes/topic.route";
import { url } from "./config/db-config";

const app = express();

const PORT = process.env.NODE_DOCKER_PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(topicRoutes);

mongoose
  .connect(url)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    )
  )
  .catch((error) => {
    throw error;
  });