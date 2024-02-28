import Order from '../models/order';
import StaffMember from '../models/staffMembers';
import Product from '../models/product';

export const seedOrders = async () => {
  try {
    // Find staff members and products in the database
    const staffMember1 = await StaffMember.findOne({ name: 'Staff Member 1' }); // Replace 'Staff Member 1' with the actual name
    const staffMember2 = await StaffMember.findOne({ name: 'Staff Member 2' }); // Replace 'Staff Member 2' with the actual name
    const basketballProduct = await Product.findOne({ name: 'Basketball' }); // Replace 'Basketball' with the actual product name
    const footballProduct = await Product.findOne({ name: 'Football' }); // Replace 'Football' with the actual product name

    // Ensure staff members and products are found
    if (!staffMember1 || !staffMember2 || !basketballProduct || !footballProduct) {
      console.error('Staff member or product not found');
      return;
    }

    // Seed orders
    await Order.insertMany([
      { staffMember: staffMember1._id, products: [{ product: basketballProduct._id, quantity: 1 }] },
      { staffMember: staffMember2._id, products: [{ product: footballProduct._id, quantity: 1 }] },
      // Add more sample orders as needed
    ]);
    console.log('Orders seeded successfully');
  } catch (err) {
    console.error('Error seeding orders:', err);
  }
};
