import { ZodError } from 'zod'
import fastify from 'fastify'
import cors from '@fastify/cors'
import { env } from './env'
import { sportsRoutes } from './http/controllers/sports/routes'
import { testing } from './testing'


export const app = fastify()

app.register(cors)

app.register(sportsRoutes)

app.get('/', async (_, reply) => {
  const data = await testing()

  reply.send({ status: 'active', data })
})

app.setErrorHandler((error, _, reply) => {
  if (error instanceof ZodError) {
    return reply
      .status(400)
      .send({ message: 'Validation error.', issues: error.format() })
  }

  if (env.NODE_ENV !== 'production') {
    console.error(error)
  } else {
    // TODO: Here we should log to an external tool
    console.error(error)
    console.log(error)
  }

  return reply.status(200).send({ message: 'Internal server error.' })
})
