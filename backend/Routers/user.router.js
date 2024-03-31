import express  from "express";
import protectMessage from "../Middleware/protectMessage.middleware.js";
import { getUserForSidebar } from "../Controller/user.controller.js";

const router = express.Router();

router.get("/",protectMessage,getUserForSidebar)

export default router;