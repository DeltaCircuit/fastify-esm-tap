import { FastifyPluginAsync } from "fastify";

const subRoutes: FastifyPluginAsync = async (app, options) => {
  app.get(
    "/test",
    async () => {
      return { message: "sub!" };
    }
  );
};
export default subRoutes;
