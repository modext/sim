// import express from 'express';

// const app = express();
// const PORT = 3001;

// app.use(express.json());

// app.get('/api/products', (req, res) => {
// });

// app.post('/api/commission', (req, res) => {
// });

// app.listen(PORT, () => {
//   console.log(`Backend running on http://localhost:${PORT}`);
// });

import express from 'express';
import { PrismaClient } from '@prisma/client';

// Import routes
import productRoutes from './src/routes/productRoutes';
import orderRoutes from './src/routes/orderRoutes';
import staffMemberRoutes from './src/routes/staffMemberRoutes';
import commissionRoutes from './src/routes/commissionRoutes';

const prisma = new PrismaClient();
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

// Use routes
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);
app.use('/staff-members', staffMemberRoutes);
app.use('/commissions', commissionRoutes);

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
