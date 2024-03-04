// import abi from "./Transactions.json";
// export const contractABI = abi.abi;
// export const contractAddress = "0x5566B5dee6e74dF49d16513A525F6C742C98a0C2";

import Web3 from "web3";
import TransactionsABI from "./Transactions.json";
const contractABI = TransactionsABI.abi;
const web3 = new Web3(window.ethereum);

const contractAddress = "0x5566B5dee6e74dF49d16513A525F6C742C98a0C2";

const transactionsContract = new web3.eth.Contract(
  contractABI,
  contractAddress
);

async function makeCryptoPayment(receiverAddress, amount) {
  console.log(receiverAddress, amount);
  const amountCrypto = amount / 10 ** 18;
  const accounts = await web3.eth.getAccounts();
  const transaction = await transactionsContract.methods
    .addToBlockchain(receiverAddress, amountCrypto)
    .send({
      from: accounts[0],
      value: web3.utils.toWei(amountCrypto.toString(), "ether"),
    });

  console.log("Transaction Hash:", transaction.transactionHash);
}

export default makeCryptoPayment;
