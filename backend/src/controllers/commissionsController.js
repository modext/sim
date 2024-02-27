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
exports.simulateCommissions = exports.setCommission = void 0;
const prismaConfig_1 = __importDefault(require("../config/prismaConfig"));
const setCommission = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId, percent } = req.body;
    try {
        const commission = yield prismaConfig_1.default.commission.create({
            data: {
                productId,
                percent,
            },
        });
        res.json(commission);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.setCommission = setCommission;
const simulateCommissions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { startDate, endDate, staffMemberId } = req.body;
    try {
        const orders = yield prismaConfig_1.default.order.findMany({
            where: {
                staffMemberId,
                date: {
                    gte: new Date(startDate),
                    lte: new Date(endDate),
                },
            },
            include: {
                product: {
                    include: {
                        commissions: true,
                    },
                },
            },
        });
        const totalCommission = orders.reduce((acc, order) => {
            const commission = order.product.commissions[order.product.commissions.length - 1]; // Get the last commission as an example
            const commissionPercent = commission ? commission.percent : 0;
            const commissionAmount = (order.product.price * commissionPercent) / 100;
            return acc + commissionAmount * order.quantity;
        }, 0);
        res.json({ totalCommission });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.simulateCommissions = simulateCommissions;
