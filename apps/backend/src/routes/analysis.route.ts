import { FastifyInstance } from 'fastify'

export async function analysisRoutes(app: FastifyInstance): Promise<void> {
  // Step 7에서 구현
  app.log.info('analysis routes registered')
}
