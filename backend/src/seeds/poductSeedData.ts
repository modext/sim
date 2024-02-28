import Product from '../models/product';

export const seedProducts = async () => {
  try {
    await Product.insertMany([
      { name: 'Basketball', price: 30, commissionPercent: 10, category: 'Sports' },
      { name: 'Football', price: 20, commissionPercent: 8, category: 'Sports' },
      // Add more sample products as needed
    ]);
    console.log('Products seeded successfully');
  } catch (err) {
    console.error('Error seeding products:', err);
  }
};
