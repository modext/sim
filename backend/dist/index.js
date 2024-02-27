"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
// Import routes
const productRoutes_1 = __importDefault(require("./src/routes/productRoutes"));
const orderRoutes_1 = __importDefault(require("./src/routes/orderRoutes"));
const staffMemberRoutes_1 = __importDefault(require("./src/routes/staffMemberRoutes"));
const commissionRoutes_1 = __importDefault(require("./src/routes/commissionRoutes"));
const prisma = new client_1.PrismaClient();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3001;
app.use(express_1.default.json());
// Use routes
app.use('/products', productRoutes_1.default);
app.use('/orders', orderRoutes_1.default);
app.use('/staff-members', staffMemberRoutes_1.default);
app.use('/commissions', commissionRoutes_1.default);
// Additional endpoints can be added here
app.get('/api/products', (req, res) => {
    // Implementation here
});
app.post('/api/commission', (req, res) => {
    // Implementation here
});
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
