if (process.env.NODE_ENV !== 'production') require('dotenv').config()

const fastify = require('fastify')({ logger: true })
const PORT = process.env.PORT

fastify.get('/', async (request, reply) => {
    return { hello: 'world' }
  })

fastify.register(require('./routes/v3/utils/route_utils'), { prefix: '/v3/utils' })
fastify.register(require('./routes/v3/routes'), { prefix: '/v3/contract' })

const start = async (port) => {
    try {
      await fastify.listen(port)
      fastify.log.info(`server listening on ${port}`)
    } catch (err) {
      fastify.log.error(err)
      process.exit(1)
    }
  }

  start(PORT)
