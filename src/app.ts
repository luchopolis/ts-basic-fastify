import { FastifyReply, FastifyRequest } from "fastify";

import { fastifyInstance } from "@config/fastify/app";

const fastify = fastifyInstance;

fastify.get("/", (req: FastifyRequest, repl: FastifyReply) => {
  return repl.send("Nice");
});

const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
  } catch (error: unknown) {
    fastify.log.error(error);
  }
};
start();
