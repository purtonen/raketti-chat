import { Router } from "express";

const router = Router();

router.get("/user", (req, res) => {
  res.json({ name: 'User' + Math.random().toString().slice(2, 5) });
});

export default router;