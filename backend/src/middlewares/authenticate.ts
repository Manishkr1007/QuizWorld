import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import User from "../models/user";

// Extending the Express Request interface to include `user`
interface AuthenticatedRequest extends Request {
  user?: any;
}

export const authenticate = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." });
  }

  try {
    const decoded: any = jwt.verify(token, "secretkey123");

    // Fetch the user by the ID in the decoded token
    const user = await User.findById(decoded?.userId);

    if (!user) {
      return res.status(401).json({ message: "User not found." });
    }

    // Attach the user to the request object
    req.user = user;

    next();
  } catch (error) {
    console.error(error); // Logging the error for debugging purposes
    return res.status(400).json({ message: "Invalid token." });
  }
};