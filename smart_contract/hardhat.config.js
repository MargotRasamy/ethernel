// Lecture du .env
const dotenv = require("dotenv");
dotenv.config();

require("@nomiclabs/hardhat-waffle");

// // This is a sample Hardhat task. To learn how to create your own go to
// // https://hardhat.org/guides/create-task.html
// task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
//   const accounts = await hre.ethers.getSigners();

//   for (const account of accounts) {
//     console.log(account.address);
//   }
// });

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      // Url fournit par Infura ou Alchemy pour le déploiement
      url: process.env.RINKEDBY_RPC_URL,
      // A trouver sur metamask, account details (exporter la clé privée)
      accounts: [process.env.ACCOUNT_PRIVATE_KEY]
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY
  }
};
