"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const user_1 = __importDefault(require("./routes/user"));
const auth_1 = __importDefault(require("./routes/auth"));
const dotenv_1 = __importDefault(require("dotenv"));
// Load environment variables from .env file
dotenv_1.default.config();
const clearBlacklistedTokenScheduler_1 = __importDefault(require("./utils/clearBlacklistedTokenScheduler"));
const app = (0, express_1.default)();
// app.use(cors({origin:`http://${process.env.CORS_ORIGIN_URL}`,credentials:true}))
app.use((0, cors_1.default)());
const connectionString = process.env.CONNECTION_STRING || "";
const port = process.env.PORT || "5000";
app.use(express_1.default.json());
//Redirect /auth
app.use("/auth", auth_1.default);
//Redirect /user to userRoute
app.use("/user", user_1.default);
app.get("/health", (req, res) => {
    res.status(200).send("Server is working!");
});
app.use((err, req, res, next) => {
    // email to corresponding email
    // logger for err
    let message;
    let statusCode;
    if (!!err.statusCode && err.statusCode < 500) {
        message = err.message;
        statusCode = err.statusCode;
    }
    else {
        message = "Something went wrong please try after sometime!";
        statusCode = 500;
    }
    let resp = { status: "error", message, data: {} };
    if (!!err.data) {
        resp.data = err.data;
    }
    console.log(err.statusCode, err.message);
    res.status(statusCode).send(resp);
});
clearBlacklistedTokenScheduler_1.default;
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connect(connectionString);
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    }
    catch (error) {
        console.log(error);
    }
}))();
