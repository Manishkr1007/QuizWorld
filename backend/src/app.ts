import express, { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors"
import userRoute from "./routes/user";
import authRoute from "./routes/auth";
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

// Load environment variables from .env file
dotenv.config();



import ProjectError from "./helper/error";
import { ReturnResponse } from "./utils/interface";
import clearBlacklistedTokenScheduler from "./utils/clearBlacklistedTokenScheduler";

const app = express();

// app.use(cors({origin:`http://${process.env.CORS_ORIGIN_URL}`,credentials:true}))
app.use(cors());

const connectionString = process.env.CONNECTION_STRING || "";

const port = process.env.PORT||"5000";

app.use(express.json());
declare global {
  namespace Express {
    interface Request {
      userId: String;
    }
  }
}

//Redirect /auth
app.use("/auth", authRoute);


//Redirect /user to userRoute
app.use("/user", userRoute);


app.get("/health", (req: Request, res: Response) => {
  res.status(200).send("Server is working!");
});

app.use(
  (err: ProjectError, req: Request, res: Response, next: NextFunction) => {
    // email to corresponding email
    // logger for err
    let message: String;
    let statusCode: number;

    if (!!err.statusCode && err.statusCode < 500) {
      message = err.message;
      statusCode = err.statusCode;
    } else {
      message = "Something went wrong please try after sometime!";
      statusCode = 500;
    }

    let resp: ReturnResponse = { status: "error", message, data: {} };
    if (!!err.data) {
      resp.data = err.data;
    }

    console.log(err.statusCode, err.message);
    res.status(statusCode).send(resp);
  }
);

clearBlacklistedTokenScheduler;

(async () => {
  try {
    await mongoose.connect(connectionString);
    app.listen(port, () => {
      
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
})();