// src/config/db.ts
import mongoose from 'mongoose';

export const connectToMongo = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI || '');
    console.log(`✅ MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    process.exit(1);
  }
};
