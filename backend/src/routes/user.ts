import express from "express";
import { authenticate } from "../middlewares/authenticate";
import User from "../models/user";

const router = express.Router();

interface AuthenticatedRequest extends express.Request {
  user?: typeof User;
}

// GET profile route
router.get("/profile", authenticate, async (req: AuthenticatedRequest, res) => {
  try {
    console.log(req);
    if (!req.user) {
      return res.status(404).json({ message: "User not found" });
    }

    console.log(req.user);

    res.status(200).json(req.user);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});
export default router;