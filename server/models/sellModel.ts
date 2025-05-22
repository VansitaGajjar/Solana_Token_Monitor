import mongoose from "mongoose";

interface ISell extends Document {
  userId: mongoose.Schema.Types.ObjectId;
  baseToken: String;
  quoteToken: String;
  amount: Number;
  tokenPrice: Number;
}

const sellSchema = new mongoose.Schema<ISell>(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      require: true,
    },
    baseToken: {
      type: String,
      require: true,
    },
    quoteToken: {
      type: String,
      require: true,
    },
    amount: {
      type: Number,
      require: true,
    },
    tokenPrice: {
      type: Number,
      require: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model<ISell>("sell", sellSchema);
