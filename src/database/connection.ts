import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();
export const connect = async (): Promise<void> => {
  try {
    await mongoose.connect(`${process.env.DATABASE_URL}/${process.env.DATABASE_NAME}`);
    console.log('successfully connected to the DB !')
  } catch (error) {
    console.log(`error occurs when connecting to the database ${error}`);
    process.exit(1);
  }

  mongoose.connection.on('error', err => {
    console.log(err);
  });

  process.on('SIGKILL', async () => {
    await mongoose.disconnect();
    console.log('Disconnected from the Database');
    process.exit(1);
  });

  process.on('SIGINT', async () => {
    await mongoose.disconnect();
    console.log('Disconnected from the Database');
    process.exit(1);
  });
};
