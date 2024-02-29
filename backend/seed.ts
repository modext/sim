import { connectDB } from './config/database';
import { seedOrders } from './src/seeds/orderSeedData';
import { seedProducts } from './src/seeds/poductSeedData';
import { seedStaffMembers } from './src/seeds/staffMemberSeedData';

const seedDatabase = async () => {
  try {
    await connectDB();

    await seedProducts();

    await seedStaffMembers();

    await seedOrders();
    
    console.log('Seed data populated successfully');
  } catch (err) {
    console.error('Error populating seed data:', err);
  }
};

seedDatabase();
