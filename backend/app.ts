import express, { Request, Response, NextFunction } from 'express';
import productRoutes from './src/routes/productRoutes';
import orderRoutes from './src/routes/orderRoutes';
import staffMemberRoutes from './src/routes/staffMemberRoutes';
import { connectDB } from './config/database';
import commissionPlanRoutes from './src/routes/commissionPlanRoutes';
import cors from 'cors';

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

app.use(cors({
  origin: 'http://localhost:8000', 
}));

// Routes
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);
app.use('/staff-members', staffMemberRoutes);
app.use('/commission-plans', commissionPlanRoutes);

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});
app.get('/', (req, res) => {
  res.send('Welcome to the Commission Simulator Backend API');
});

// Start the server
const PORT: number = parseInt(process.env.PORT || '5000', 10);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
