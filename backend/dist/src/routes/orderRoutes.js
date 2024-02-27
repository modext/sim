"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ordersControllers_1 = require("../controllers/ordersControllers");
const router = express_1.default.Router();
router.post('/', ordersControllers_1.createOrder);
router.get('/', ordersControllers_1.getOrders);
exports.default = router;
