import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDatabase = () => {
  mongoose
    .connect(`${process.env.MONGODB_URI}/solana_token_monitor`)
    .then((data) => {
      console.log(`Mongo Connected at ${data.connection.host}`);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default connectDatabase;
