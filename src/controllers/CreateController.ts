import type { FastifyReply, FastifyRequest } from "fastify";
import { CreateNutritionService } from "../services/CreateService";

class CreateNutritionController {
	async handle(request: FastifyRequest, reply: FastifyReply) {
		console.log("rota chamada");

		const createNutrition = new CreateNutritionService();

		const nutrition = await createNutrition.execute();

		reply.send(nutrition);
	}
}

export { CreateNutritionController };
