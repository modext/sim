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
exports.createStaffMember = exports.getStaffMembers = void 0;
const prismaConfig_1 = __importDefault(require("../config/prismaConfig"));
const getStaffMembers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const staffMembers = yield prismaConfig_1.default.staffMember.findMany();
        res.json(staffMembers);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.getStaffMembers = getStaffMembers;
const createStaffMember = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = req.body;
    try {
        const newStaffMember = yield prismaConfig_1.default.staffMember.create({
            data: { name },
        });
        res.json(newStaffMember);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.createStaffMember = createStaffMember;
