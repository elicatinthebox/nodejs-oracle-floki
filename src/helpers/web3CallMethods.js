const Web3 = require("web3");
const BigNumber = require("bignumber.js");
var range = require("lodash.range");
var Devoleum = require("../routes/v3/contract/Devoleum.json");

console.log(Devoleum.networks[4].address);
const ACCOUNT = process.env.INFURA_ACCOUNT;
const INFURA_API = process.env.INFURA_API;

const web3 = new Web3(INFURA_API);

const contractInstance = new web3.eth.Contract(
  Devoleum.abi,
  Devoleum.networks[4].address
);

const getItem = async (getItemMethod, optParam) => {
  const item = optParam
    ? await contractInstance.methods[getItemMethod](optParam).call()
    : await contractInstance.methods[getItemMethod]().call();

  return item;
};

const getItemsByIndexes = async (getIndexesMethod, getItemMethod, optParam) => {
  const indexes = optParam
    ? await contractInstance.methods[getIndexesMethod](optParam).call()
    : parseInt(await contractInstance.methods[getIndexesMethod]().call());

  let items = [];

  console.log(indexes);

  const iteration = Array.isArray(indexes) ? indexes : range(1, indexes + 1);

  console.log(iteration);

  await Promise.all(
    iteration.map(async (i) => {
      let item = await contractInstance.methods[getItemMethod](i).call();
      items.push(item);
    })
  );

  return items;
};

module.exports = {
  getItem,
  contractInstance,
  getItemsByIndexes,
};
