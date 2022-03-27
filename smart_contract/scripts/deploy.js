const hre = require("hardhat");

const main = async () => {

  const Transactions = await hre.ethers.getContractFactory("Transactions");
  const transactions = await Transactions.deploy();

  await transactions.deployed();

  // Gives the smart contract address 
  console.log("Ethernel transactions deployed to:", transactions.address);
}

const runMain = async () => {
  try {
    await main();
    process.exit(0)
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

runMain();

