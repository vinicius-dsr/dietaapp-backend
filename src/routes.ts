import type {
	FastifyInstance,
	FastifyPluginOptions,
	FastifyReply,
	FastifyRequest,
} from "fastify";
import { CreateNutritionController } from "./controllers/CreateController";

export async function routes(
	fastify: FastifyInstance,
	options: FastifyPluginOptions,
) {
	fastify.get("/teste", (request: FastifyRequest, reply: FastifyReply) => {
		console.log("Rota chamada com sucesso");
		reply.send({ message: "Rota chamada com sucesso" });
	});

	fastify.post(
		"/create",
		async (request: FastifyRequest, reply: FastifyReply) => {
			return new CreateNutritionController().handle(request, reply);
		},
	);
}
