import { connectDB } from './config/database';
import { seedOrders } from './src/seeds/orderSeedData';
import { seedProducts } from './src/seeds/poductSeedData';
import { seedStaffMembers } from './src/seeds/staffMemberSeedData';

const seedDatabase = async () => {
  try {
    // Connect to the database
    await connectDB();

    // Seed products
    await seedProducts();

    // Seed staff members
    await seedStaffMembers();

    // Seed orders
    await seedOrders();

    // Disconnect from the database
    // This is optional and depends on your use case
    // await mongoose.disconnect();

    console.log('Seed data populated successfully');
  } catch (err) {
    console.error('Error populating seed data:', err);
  }
};

seedDatabase();
