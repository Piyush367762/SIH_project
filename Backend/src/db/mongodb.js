import mongoose from 'mongoose';
const DB_NAME="sih_project";

// MongoDB connection

const connectMongoDB = async () => {
  try {
   
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }

};

export default connectMongoDB;