import prisma from "../config/prismaConfig";
import { Request, Response } from "express";

export const setCommission = async (req: Request, res: Response) => {
  const { productId, percent } = req.body;
  try {
    const commission = await prisma.commission.create({
      data: {
        productId,
        percent,
      },
    });
    res.json(commission);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const simulateCommissions = async (req: Request, res: Response) => {
  const { startDate, endDate, staffMemberId } = req.body;
  try {
    const orders = await prisma.order.findMany({
      where: {
        staffMemberId,
        date: {
          gte: new Date(startDate),
          lte: new Date(endDate),
        },
      },
      include: {
        Product: {
          include: {
            commissions: true,
          },
        },
      },
    });

    const totalCommission = orders.reduce((acc, order) => {
      if (order.Product.commissions && order.Product.commissions.length > 0) {
        const lastCommission = order.Product.commissions[order.Product.commissions.length - 1];
        const commissionPercent = lastCommission.percent;
        const commissionAmount = (order.Product.price * commissionPercent) / 100;
        return acc + commissionAmount * order.quantity;
      } else {
        return acc;
      }
    }, 0);

    res.json({ totalCommission });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
