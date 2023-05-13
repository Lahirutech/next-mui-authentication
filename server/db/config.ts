import mongoose from 'mongoose';
let isConnected: boolean;

const connectMongo = async () => {
  if (isConnected) {
    console.log('connected using the old instance');
    return Promise.resolve(true);
  }

  try {
    const { connection } = await mongoose.connect(
      process.env.MONGO_URL as string
    );

    if (connection.readyState == 1) {
      isConnected = true;
      return Promise.resolve(true);
    }
  } catch (err) {
    return Promise.reject(err);
  }
};

export default connectMongo;
