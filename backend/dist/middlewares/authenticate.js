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
exports.authenticate = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_1 = __importDefault(require("../models/user"));
const authenticate = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const token = (_a = req.header("Authorization")) === null || _a === void 0 ? void 0 : _a.replace("Bearer ", "");
    if (!token) {
        return res
            .status(401)
            .json({ message: "Access denied. No token provided." });
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(token, "secretkey123");
        // Fetch the user by the ID in the decoded token
        const user = yield user_1.default.findById(decoded === null || decoded === void 0 ? void 0 : decoded.userId);
        if (!user) {
            return res.status(401).json({ message: "User not found." });
        }
        // Attach the user to the request object
        req.user = user;
        next();
    }
    catch (error) {
        console.error(error); // Logging the error for debugging purposes
        return res.status(400).json({ message: "Invalid token." });
    }
});
exports.authenticate = authenticate;
