import mongoose from 'mongoose';
import { MONGO_URI } from '@/core';

export async function connectToDb() {
  try {
  await mongoose.connect(MONGO_URI);
} catch(err: any) {
    console.error('Error connecting to MongoDB:', err.message);
    throw err;
}
}