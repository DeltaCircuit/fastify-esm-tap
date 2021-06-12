import { FastifyPluginAsync } from "fastify";
import fastifyAutoload from "fastify-autoload";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

export const autoLoader: FastifyPluginAsync = async (
  fastifyInstance,
  options
) => {
  // Loads Routes
  fastifyInstance.register(fastifyAutoload, {
    dir: join(dirname(fileURLToPath(import.meta.url)), "routes"),
    options: { ...options },
  });
};
