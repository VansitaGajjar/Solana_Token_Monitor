import usersModel from "../models/usersModel.ts";

const createUser = async (req: any, res: any) => {
  const {
    rpcUrl,
    walletAddress,
    privateKey,
    email,
    appreciationPercentage,
    depreciationPercentage,
    solAmount,
    timeInterval,
    tokenList,
  } = req.body;

  const formattedTokenList = tokenList.map((tokenAddress: String) => ({
    tokenAddress: tokenAddress,
    price: 0,
  }));

  await usersModel.create({
    rpcUrl,
    walletAddress,
    privateKey,
    email,
    appreciationPercentage: parseFloat(appreciationPercentage),
    depreciationPercentage: parseFloat(depreciationPercentage),
    solAmount: parseFloat(solAmount),
    timeIntervalOfPrice: parseInt(timeInterval, 10),
    tokenList: formattedTokenList,
  });
  return res.status(200).json({
    success: 1,
    data: "user created Successfully",
  });
};

export default { createUser };
