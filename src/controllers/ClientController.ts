import { Request, Response } from "express"
import { ClientService } from "../services/ClientService"

export class ClientController {


    async insert(request: Request, response: Response) {
        const { name, phoneNumber, email, cpf, observation } = request.body

        const service = new ClientService()

        const result = await service.insert({ name, phoneNumber, email, cpf, observation });

        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }
        return response.json(result);
    }

    async getAll(request: Request, response: Response) {
        const service = new ClientService();
        const categories = await service.getAll()
        return response.json(categories);
    }

    async getById(request: Request, response: Response) {
        const id = Number(request.params.id)
        const service = new ClientService();
        const client = await service.getById(id)

        return response.json(client);
    }

    async delete(request: Request, response: Response) {
        const { id } = request.params

        const service = new ClientService();
        const result = await service.delete(Number(id));

        if (result instanceof Error) {
            response.status(404).json(result.message);
        }

        return response.status(204).end();
    }
    async update(request: Request, response: Response) {
        const id = Number(request.params.id)
        
        const { name, phoneNumber, email, cpf, observation } = request.body

        const service = new ClientService();
        const result = await service.update({ id, name, phoneNumber, email, cpf, observation })
        if (result instanceof Error) {
            response.status(404).json(result.message);
        }

        return response.json(result);
    }

}