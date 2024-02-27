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
exports.getOrders = exports.createOrder = void 0;
const prismaConfig_1 = __importDefault(require("../config/prismaConfig"));
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId, staffMemberId, quantity, date } = req.body;
    try {
        const newOrder = yield prismaConfig_1.default.order.create({
            data: {
                productId,
                staffMemberId,
                quantity,
                date: new Date(date),
            },
        });
        res.json(newOrder);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.createOrder = createOrder;
const getOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orders = yield prismaConfig_1.default.order.findMany({
            include: {
                product: true,
                staffMember: true,
            },
        });
        res.json(orders);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.getOrders = getOrders;
