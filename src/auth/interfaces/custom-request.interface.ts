import {FastifyRequest} from 'fastify';

export interface CustomRequest extends FastifyRequest {
  user: string
}
