"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const staffMembersController_1 = require("../controllers/staffMembersController");
const router = express_1.default.Router();
router.get('/', staffMembersController_1.getStaffMembers);
router.post('/', staffMembersController_1.createStaffMember);
exports.default = router;
