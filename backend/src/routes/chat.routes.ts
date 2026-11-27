import { Router } from "express";
import rateLimit from "express-rate-limit";
import { postChat } from "../controllers/chat.controller.js";

const chatLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  limit: 20,
  standardHeaders: true,
  legacyHeaders: false,
  handler: (_req, res) => {
    res.status(429).json({ error: "Too many messages. Please wait a moment and try again." });
  },
});

const router = Router();

router.post("/", chatLimiter, postChat);

export default router;
