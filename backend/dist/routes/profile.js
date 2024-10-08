"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const profile_1 = require("../controllers/profile");
const authenticate_1 = require("../middlewares/authenticate");
const router = express_1.default.Router();
// Route to get the profile, protected with `authenticate`
router.get('/profile', authenticate_1.authenticate, profile_1.getProfile);
// Route to update the profile, protected with `authenticate`
router.put('/profile', authenticate_1.authenticate, profile_1.updateProfile);
exports.default = router;
