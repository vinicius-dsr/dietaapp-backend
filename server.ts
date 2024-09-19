import Fastify from "fastify";
import cors from "@fastify/cors";
import dotenv from "dotenv";

dotenv.config();

const app = Fastify({logger: true});
dotenv.config();

app.setErrorHandler((error, request, reply) => {
  reply.code(400).send({message: error.message});
});

const start = async () => {
  app.register(cors);
  app.register(routes);

  try {
    await app.listen({port: 3333, host: "0.0.0.0"});
    console.log("Server is running on port 3333 🔥");
  } catch (error) {
    app.log.error(error);

  }
}


start();
