import "dotenv/config";
import cors from "cors";
import express from "express";
import chatRoutes from "./routes/chat.routes.js";

const port = Number(process.env.PORT) || 5000;
const host = "0.0.0.0";

const allowedOrigins = [
  ...(process.env.CORS_ORIGIN ?? "http://localhost:8080").split(","),
  "https://sabarinathan-s.vercel.app",
]
  .map((origin) => origin.trim())
  .filter(Boolean);

const app = express();

app.disable("x-powered-by");
app.use(express.json({ limit: "32kb" }));
app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
        return;
      }
      callback(null, false);
    },
  }),
);

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.get("/", (_req, res) => {
  res.json({
    message:
      "Hi! 👋 Welcome to my portfolio. I'm Sabari's AI assistant. Feel free to ask me about his backend development experience, technical skills, projects, and professional background.",
  });
});

app.use("/api/chat", chatRoutes);

app.use((_req, res) => {
  res.status(404).json({ error: "Not found." });
});

app.listen(port, host, () => {
  console.log(`Ask Sabari API listening on ${host}:${port}`);
});
