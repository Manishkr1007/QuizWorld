"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const schema = mongoose_1.default.Schema;
// schema for user
const userSchema = new schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function (email) {
                // Simple regex for validating email format
                const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
                return emailRegex.test(email);
            },
            message: (props) => `${props.value} is not a valid email!`,
        },
    },
    password: {
        type: String,
        required: true,
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    isDeactivated: {
        type: Boolean,
        default: false,
    },
    remainingTry: {
        type: Number,
        default: 3,
    },
    temperoryKey: {
        type: String,
        default: ''
    },
    freezeTime: {
        type: Date,
        default: new Date()
    },
    accountBlocked: {
        type: Boolean,
        default: false
    },
    isTempKeyUsed: {
        type: Boolean,
        default: false
    },
}, { timestamps: true });
// model for user
const User = mongoose_1.default.model('User', userSchema);
exports.default = User;
