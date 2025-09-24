import express, { Router } from "express";
import { getAccessToken } from "chat/service";

const router = Router();

router.use(express.json());

router.post("/chat/token", async (req, res) => {
  const username = req.body.username;
  const group = req.body.group;
  const token = await getAccessToken(username, group);
  res.json(token);
});

export default router;