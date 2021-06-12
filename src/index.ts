import fastify from "fastify";
import { autoLoader } from "./autoloader";

export const fastifyServer = fastify({ logger: true });

fastifyServer.register(autoLoader);
fastifyServer.get("/", async (request, reply) => {
  return { message: "Hello World!" };
});

const start = async () => {
  try {
    await fastifyServer.listen(1234, "0.0.0.0");
  } catch (error) {
    fastifyServer.log.error(error);
    process.exit(1);
  }
};

start();
