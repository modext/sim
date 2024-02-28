import express, { Request, Response } from 'express';
import Order, { IOrder } from '../models/order'; // Assuming you have an interface IOrder for Order model
import CommissionPlan, { ICommissionPlan } from '../models/commissionPlan'; // Assuming you have an interface ICommissionPlan for CommissionPlan model

const router = express.Router();

// Calculate commissions for a specific staff member within a date range
router.get('/calculate-commissions', async (req: Request, res: Response) => {
  try {
    const { staffMemberId, startDate, endDate } = req.query;
    if (!staffMemberId || !startDate || !endDate || typeof staffMemberId !== 'string' || typeof startDate !== 'string' || typeof endDate !== 'string') {
      return res.status(400).json({ message: 'staffMemberId, startDate, and endDate are required and must be strings' });
    }

    const orders: IOrder[] = await Order.find({
      date: { $gte: new Date(startDate), $lte: new Date(endDate) },
      staffMember: staffMemberId
    });

    let totalCommission = 0;
    for (const order of orders) {
      const commissionPlan: ICommissionPlan | null = await CommissionPlan.findOne({ product: order.products });
      if (commissionPlan) {
        const commissionAmount = order.products.reduce((total: number, product: any) => { // Assuming product type is any
          return total + product.price * (commissionPlan.commissionPercent / 100);
        }, 0);
        totalCommission += commissionAmount;
      }
    }

    res.json({ staffMemberId, totalCommission });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
