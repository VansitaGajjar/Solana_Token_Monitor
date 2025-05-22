import mongoose, { Document, Schema } from "mongoose";

interface IToken {
  tokenAddress: string;
  price: number;
}

interface IUser extends Document {
  rpcUrl: string;
  walletAddress: string;
  privateKey: string;
  email: string;
  appreciationPercentage: number;
  depreciationPercentage: number;
  solAmount: number;
  timeIntervalOfPrice: number;
  tokenList: IToken[];
}

const userSchema = new mongoose.Schema<IUser>(
  {
    rpcUrl: {
      type: String,
      require: true,
    },
    walletAddress: {
      type: String,
      require: true,
    },
    privateKey: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    appreciationPercentage: {
      type: Number,
      require: true,
    },
    depreciationPercentage: {
      type: Number,
      require: true,
    },
    solAmount: {
      type: Number,
      require: true,
    },
    timeIntervalOfPrice: {
      type: Number,
      require: true,
    },
    tokenList: [
      {
        tokenAddress: { type: String, require: true },
        price: { type: Number, require: true },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model<IUser>("users", userSchema);
