const peekaboo = require('fastify-peekaboo')

const {
  getMerchant,
  getHistory,
  getHistories,
  getStep,
  getSteps,
} = require("./controllers/controllers");

module.exports = async (fastify, opts, done) => {

  await fastify.register(peekaboo, {
    // default settings: cache good stuff for 1 day
    rules: [{
      request: {
        methods: true,
        route: true
      },
      response: {
        status: (code) => code > 199 && code < 300
      }
    }],
    mode: 'memoize',
    storage: { mode: 'memory' },
    expire: 86400000, // 1 day in ms
    xheader: true,
    log: true
  })
  

  fastify.get("/merchant/:id", getMerchant);
  fastify.get("/history/:historyid", getHistory);
  fastify.get("/allhistories", getHistories);
  fastify.get("/step/:historyid", getStep);
  fastify.get("/history-steps/:historyid", getSteps);
  done();
};
