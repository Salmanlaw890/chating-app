import  express from "express";
import { getMEssagesOfSpecificUsers, sendMessage } from "../Controller/message.controller.js";
import protectMessage from "../Middleware/protectMessage.middleware.js";

const router = express.Router();

router.post("/send/:id",protectMessage,sendMessage)

router.get("/:id",protectMessage,getMEssagesOfSpecificUsers)

export default router;