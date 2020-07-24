const {
  getItem,
  getItemsByIndexes,
} = require("../../../helpers/web3CallMethods");

const getMerchant = async (request, reply) => {
  const id = request.params.id;

  reply.send(await getItem("getMerchantInfo", id));
};

const getHistoriesByMerchant = async (request, reply) => {
  const id = request.params.id;

  reply.send(
    await getItemsByIndexes("historiesOfMerchant", "getHistoryInfo", id)
  );
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

const getHistoriesByCategory = async (request, reply) => {
  const historyId = request.params.category;

  reply.send(
    await getItemsByIndexes("historiesOfCategory", "getHistoryInfo", category)
  );
};

const getStep = async (request, reply) => {
  const stepID = request.params.stepid;

  reply.send(await getItem("getStepInfo", parseInt(stepID)));
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
  getHistoriesByMerchant,
  getHistory,
  getHistories,
  getHistoriesByCategory,
  getStep,
  getSteps,
};
