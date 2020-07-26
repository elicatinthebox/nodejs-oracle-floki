if (process.env.NODE_ENV !== 'production') require('dotenv').config()

const fastify = require('fastify')({ logger: true })

fastify.get('/', async (request, reply) => {
    return { hello: 'world' }
  })

fastify.register(require('./routes/v3/utils/route_utils'), { prefix: '/v3/utils' })
fastify.register(require('./routes/v3/routes'), { prefix: '/v3/contract' })

fastify.listen(process.env.PORT || 8000, err => {
  if (err) throw err
  console.log(`server listening on ${fastify.server.address().port}`)
})
