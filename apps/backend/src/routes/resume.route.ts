import { FastifyInstance } from 'fastify'

export async function resumeRoutes(app: FastifyInstance): Promise<void> {
  // Step 7에서 구현
  app.log.info('resume routes registered')
}
