const {
  getMerchant,
  getHistoriesByMerchant,
  getHistory,
  getHistories,
  getHistoriesByCategory,
  getStep,
  getSteps,
} = require("./controllers/controllers");

var cache = require("memory-cache");

let memCache = new cache.Cache();

module.exports = async (fastify, opts, done) => {
  //CACHE IN MEMORY FOR 1 DAY
  fastify.addHook("onRequest", (req, res, done) => {
    if (req.method !== "GET") return;
    let key = req.originalUrl || req.url;
    let cacheContent = memCache.get(key);
    if (cacheContent) {
      console.log("cached");
      res.send(cacheContent);
      return;
    } else {
      res.sendResponse = res.send;
      res.send = (body) => {
        memCache.put(key, body, 86400 * 1000);
        console.log("caching request: ", req.url);
        res.sendResponse(body);
      };
      done();
    }
  });

  fastify.get("/merchant/:id", getMerchant);
  fastify.get("/merchant/:id/histories", getHistoriesByMerchant);
  fastify.get("/history/:historyid", getHistory);
  fastify.get("/allhistories", getHistories);
  fastify.get("/allhistories/:category", getHistoriesByCategory);
  fastify.get("/step/:stepid", getStep);
  fastify.get("/history-steps/:historyid", getSteps);
  done();
};
