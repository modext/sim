// config/database.ts
import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb://localhost:27017/Simulator');
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err:any) {
    console.error(`Error connecting to MongoDB: ${err.message}`);
    process.exit(1);
  }
};

