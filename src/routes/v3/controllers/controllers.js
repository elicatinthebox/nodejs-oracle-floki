const { getItem, getItemsByIndexes } = require("../../../helpers/web3CallMethods");

const getMerchant = async (request, reply) => {
  const id = request.params.id;

  reply.send(await getItem("getMerchantInfo", id));
};

const getHistory = async (request, reply) => {
  const historyID = request.params.historyid;
  console.log("getHistory called");
  reply.send(await getItem("getHistoryInfo", parseInt(historyID)));
};

const getHistories = async (request, reply) => {
  console.log("getHistories called");
  reply.send(await getItemsByIndexes("historiesCounter", "getHistoryInfo"));
};

const getStep = async (request, reply) => {
  const id = request.params.id;

  reply.send(await getItem("getStepInfo", parseInt(id)));
};
const getSteps = async (request, reply) => {
  const historyId = request.params.historyid;

  reply.send(
    await getItemsByIndexes(
      "stepsOfHistory",
      "getStepInfo",
      parseInt(historyId)
    )
  );
};

module.exports = {
  getMerchant,
  getHistory,
  getHistories,
  getStep,
  getSteps,
};
