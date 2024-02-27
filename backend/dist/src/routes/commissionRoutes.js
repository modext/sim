"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const commissionsController_1 = require("../controllers/commissionsController");
const router = express_1.default.Router();
router.post('/', commissionsController_1.setCommission);
router.post('/simulate', commissionsController_1.simulateCommissions);
exports.default = router;
