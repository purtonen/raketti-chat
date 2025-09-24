import { Router } from "express";
import { getMessages, addMessage } from "./service";

const router = Router();

router.get("/messages", async (req, res) => {
  const messages = await getMessages();
  res.json(messages);
});

router.post("/messages", async (req, res) => {
  console.log("POST /messages", req.body);
  const user = req.body.user;
  const text = req.body.text;
  const message = await addMessage(user, text);
  res.json(message);
});

export default router;