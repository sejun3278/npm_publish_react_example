"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = exports.Button = void 0;
// import { default as Button } from "./src/lib/button";
// import { default as Text } from "./src/lib/text";
var button_1 = __importDefault(require("./button"));
Object.defineProperty(exports, "Button", { enumerable: true, get: function () { return button_1.default; } });
var text_1 = __importDefault(require("./text"));
Object.defineProperty(exports, "Text", { enumerable: true, get: function () { return text_1.default; } });
