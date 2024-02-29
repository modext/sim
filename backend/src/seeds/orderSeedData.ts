import Order from "../models/order";
import StaffMember from "../models/staffMembers";
import Product from "../models/product";
import mongoose from "mongoose";

export const seedOrders = async () => {
  try {
    // const ordersCount = await Order.countDocuments();
    // if (ordersCount > 0) {
    //   console.log("Orders already seeded");
    //   return;
    // }

    const staffMember1 = await StaffMember.findOneAndUpdate(
      { name: "Staff Member 1" },
      {},
      { upsert: true, new: true }
    );
    const staffMember2 = await StaffMember.findOneAndUpdate(
      { name: "Staff Member 2" },
      {},
      { upsert: true, new: true }
    );
    const basketballProduct = await Product.findOneAndUpdate(
      { name: "Basketball", commissionPercent: 10 },
      {},
      { upsert: true, new: true }
    );
    const footballProduct = await Product.findOneAndUpdate(
      { name: "Football", commissionPercent: 5 },
      {},
      { upsert: true, new: true }
    );
    
    if (!staffMember1 || !staffMember2 || !basketballProduct || !footballProduct) {
      console.error('Staff member or product not found');
      return;
    }
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    await Order.insertMany([
      {
        staffMember: staffMember1._id,
        products: [{ product: basketballProduct._id, quantity: 1 }],
        date: today,
      },
      {
        staffMember: staffMember2._id,
        products: [{ product: footballProduct._id, quantity: 2 }],
        date: yesterday,
      },
    ]);
    console.log("Orders seeded successfully");
  } catch (err) {
    console.error("Error seeding orders:", err);
  } finally {
    mongoose.disconnect();
  }
};

seedOrders();
