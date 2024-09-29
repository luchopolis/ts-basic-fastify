import Fastify from "fastify";

import { FastifyConfigOptions } from "@config/fastify/fastify.config";

export const fastifyInstance = Fastify(FastifyConfigOptions);
