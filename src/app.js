import fastify from 'fastify';
const port = process.env.PORT || 8000

fastify.get('/', async (request, reply) => {
    return { hello: 'world' }
  })


export const start = async (port) => {
    try {
      await fastify.listen(port)
      fastify.log.info(`server listening on ${fastify.server.address().port}`)
    } catch (err) {
      fastify.log.error(err)
      process.exit(1)
    }
  }
