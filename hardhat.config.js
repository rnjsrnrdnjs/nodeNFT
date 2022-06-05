/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
const { API_URL, METAMASK_PRIVATE_KEY } = process.env;
module.exports = {
  solidity: "0.8.4",
  defaultNetwork: "mainnet",
  networks: {
    hardhat: {},
    //ropsten
    mainnet: {
      url: API_URL,
      accounts: [`0x${METAMASK_PRIVATE_KEY}`],
    },
  },
};
