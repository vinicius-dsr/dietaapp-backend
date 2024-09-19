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
		const responseText =
			'```json\n{\n  "nome": "Vinicius Reis",\n  "sexo": "Masculino",\n  "idade": 24,\n  "altura": 1.70,\n  "peso": 86,\n  "objetivo": "Emagrecer",\n  "refeicoes": [\n    {\n      "horario": "08:00",\n      "nome": "Café da manhã",\n      "alimentos": [\n        "1 fatia de pão integral",\n        "1 ovo cozido",\n        "1 copo de leite desnatado",\n        "1 banana",\n        "2 fatias de queijo minas",\n        "1 colher de sopa de granola"\n      ]\n    },\n    {\n      "horario": "10:30",\n      "nome": "Lanche da manhã",\n        "alimentos": [\n        "1 iogurte grego natural",\n        "1 colher de sopa de chia"\n      ]\n    },\n    {\n      "horario": "13:00",\n      "nome": "Almoço",\n      "alimentos": [\n        "150g de frango grelhado",\n        "1 xícara de arroz integral",\n        "1 xícara de brócolis",\n        "Salada verde com azeite de oliva"\n      ]\n    },\n    {\n      "horario": "15:30",\n      "nome": "Lanche da tarde",\n      "alimentos": [\n        "1 Maçã",\n        "1 xícara de chá verde"\n      ]\n    },\n    {\n      "horario": "19:00",\n      "nome": "Jantar",\n      "alimentos": [\n        "150g de peixe assado",\n        "1 xícara de batata doce cozida",\n        "1 xícara de couve refogada"\n      ]\n    },\n    {\n      "horario": "21:00",\n      "nome": "Ceia",\n      "alimentos": [\n        "1 iogurte natural desnatado"\n      ]\n    }\n  ],\n  "suplementos": [\n    "Proteína do soro do leite",\n    "Creatina",\n    "Ômega 3"\n  ]\n}\n```\n';

		try {
			//Extrair o JSON
			const jsonString = responseText
				.replace(/```\w*\n/g, "")
				.replace(/\n```/g, "")
				.trim();

			const jsonObject = JSON.parse(jsonString);

			return reply.send({ data: jsonObject });
		} catch (err) {
			console.log(err);
		}

		reply.send({ ok: true });
	});

	fastify.post(
		"/create",
		async (request: FastifyRequest, reply: FastifyReply) => {
			return new CreateNutritionController().handle(request, reply);
		},
	);
}
