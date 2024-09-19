import {FastifyInstance, FastifyRequest, FastifyReply, FastifyPluginOptions} from "fastify";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions){
  fastify.get("/teste", ( request: FastifyRequest, reply: FastifyReply) => {
    console.log("Rota chamada com sucesso");
    reply.send({message: "Rota chamada com sucesso"});
  })
}