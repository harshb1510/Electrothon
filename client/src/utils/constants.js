import Web3 from "web3";
import TransactionsABI from "./Transactions.json";
const contractABI = TransactionsABI.abi;
const web3 = new Web3(window.ethereum);

const contractAddress = "0x4D62E93459e7eaB928Fa760b5fD09A9Ef56fA703";

const transactionsContract = new web3.eth.Contract(
  contractABI,
  contractAddress
);

async function makeCryptoPayment(receiverAddress, amount) {
  console.log(receiverAddress, amount);
  const amountCrypto = amount * 1000000000000000000;
  console.log(amountCrypto)
  const accounts = await web3.eth.getAccounts();
  const amountInWei = web3.utils.toWei(amount.toString(), 'ether');

const transaction = await transactionsContract.methods
    .addToBlockchain(receiverAddress, amountCrypto)
    .send({
        from: accounts[0],
        value: amountInWei,
    });

  console.log("Transaction Hash:", transaction.transactionHash);
}

export default makeCryptoPayment;
