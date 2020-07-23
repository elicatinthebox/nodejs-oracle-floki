const {getItem, getItemsByIndexes} = require('../../helpers/web3Methods');

const getHistories = async (request, reply) => {
  reply.send(await getItemsByIndexes("historiesCounter", "getHistoryInfo"))
};

const getSteps = async (request, reply) => {
  const historyId = request.params.historyid;

  reply.send(await getItemsByIndexes("stepsOfHistory", "getStepInfo", parseInt(historyId)))
};

const getMerchant = async (request, reply) => {
  const id = request.params.id;

  reply.send(await getItem(getMerchantInfo, parseInt(id)))
};

module.exports = function (fastify, opts, done) {
  fastify.get("/allhistories", getHistories);
  fastify.get("/steps/:historyid", getSteps);
  fastify.get("/merchant/:id", getMerchant);
  done();
};
