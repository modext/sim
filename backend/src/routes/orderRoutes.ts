import express, { Request, Response } from 'express';
import Order, { IOrder } from '../models/order'; // Assuming you have an interface IOrder for Order model

const router = express.Router();

// Create an order
router.post('/', async (req: Request, res: Response) => {
  try {
    const order: IOrder = await Order.create(req.body);
    res.status(201).json(order);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

// Get all orders
router.get('/', async (_req: Request, res: Response) => {
  try {
    const orders: IOrder[] = await Order.find();
    res.json(orders);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// Get a single order by ID
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const order: IOrder | null = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json(order);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// Update an order
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const order: IOrder | null = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json(order);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

// Delete an order
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const order: IOrder | null = await Order.findByIdAndDelete(req.params.id);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json({ message: 'Order deleted successfully' });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
