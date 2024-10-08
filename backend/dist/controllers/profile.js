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
exports.updateProfile = exports.getProfile = void 0;
const profile_1 = __importDefault(require("../models/profile"));
const getProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const profile = yield profile_1.default.findOne({ userId: req.user._id });
        if (!profile) {
            return res.status(404).json({ message: 'Profile not found' });
        }
        res.json(profile);
    }
    catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});
exports.getProfile = getProfile;
const updateProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, age, bio } = req.body;
    try {
        const profile = yield profile_1.default.findOneAndUpdate({ userId: req.user._id }, { name, age, bio }, { new: true });
        if (!profile) {
            return res.status(404).json({ message: 'Profile not found' });
        }
        res.json(profile);
    }
    catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});
exports.updateProfile = updateProfile;
