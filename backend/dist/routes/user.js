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
const authenticate_1 = require("../middlewares/authenticate");
const router = express_1.default.Router();
// GET profile route
router.get("/profile", authenticate_1.authenticate, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req);
        if (!req.user) {
            return res.status(404).json({ message: "User not found" });
        }
        console.log(req.user);
        res.status(200).json(req.user);
    }
    catch (error) {
        res.status(500).json({ message: "Server error" });
    }
}));
exports.default = router;
