const getHeaders = require("../../../helpers/getHeaders");

const optSize = {
  schema: {
    body: {
      type: "object",
      properties: {
        url: { type: "string" },
      },
    },
  },
};

module.exports = function (fastify, opts, done) {
  fastify.get("/test", function (request, reply) {
    reply.send({ test: "uptime ok" });
  });

  fastify.post("/size", optSize, async (request, reply) => {
    getHeaders(request.body.url).then((headers) => {
      reply.send(headers);
    });
  });

  done();
};
