import express, { Request, Response } from 'express';
import Order, { IOrder } from '../models/order'; // Assuming you have an interface IOrder for Order model

const router = express.Router();

// Get orders within a specific date range
router.get('/date-range', async (req: Request, res: Response) => {
  try {
    const { startDate, endDate } = req.query;
    if (!startDate || !endDate || typeof startDate !== 'string' || typeof endDate !== 'string') {
      return res.status(400).json({ message: 'Both startDate and endDate are required and must be strings' });
    }

    const orders: IOrder[] = await Order.find({
      date: { $gte: new Date(startDate), $lte: new Date(endDate) }
    });

    res.json(orders);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

export default router;

