const fastify = require('fastify')({
  logger: true
})

if (process.env.NODE_ENV !== 'production') require('dotenv').config()
const PORT = process.env.PORT || 8000
console.log(`PORT ${PORT}`)

fastify.register(require('fastify-cors'), {
  origin: [/\.devoleum\.com$/, /^https:\/\/devoleum-sim-test.netlify.app(.*)/, /^http:\/\/localhost(.*)/, /^https:\/\/5f3eb53df1854c0007e02a2a--devoleum-sim-test.netlify.app(.*)/]
})

fastify.get('/', async (request, reply) => {
  return {
    hello: 'world'
  }
})

fastify.register(require('./routes/v3/utils/route_utils'), {
  prefix: '/v3/utils'
})
fastify.register(require('./routes/v3/routes'), {
  prefix: '/v3/contract'
})

fastify.listen(PORT, '0.0.0.0', err => {
  if (err) throw err
  console.log(`server listening on ${fastify.server.address().port}`)
})
