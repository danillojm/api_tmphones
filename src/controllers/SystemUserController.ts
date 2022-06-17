import { SystemUserService } from "../services/SystemUserService";
import { Request, Response } from "express";
export class SystemUserController {

    async insert(request: Request, response: Response) {

        const { name, login, password, phoneNumber, accessProfile, email } = request.body;

        const service = new SystemUserService();
        const result = await service.insert({ name, login, password, phoneNumber, accessProfile, email });


        response.json(result);

    }

    async getAll(request: Request, response: Response) {

        const service = new SystemUserService();
        const systemUsers = await service.getAll()
        response.json(systemUsers);

    }
    async getById(request: Request, response: Response) {
        const id = Number(request.params.id)
        const service = new SystemUserService();
        const purchase = await service.getById(id)

        return response.json(purchase);
    }

    async delete(request: Request, response: Response) {
        const id = Number(request.params.id)

        const service = new SystemUserService();
        const result = await service.delete(id);
        console.log(result)
        if (result instanceof Error) {
            response.status(404).json(result.message);
        }

        return response.status(204).end();
    }
    async update(request: Request, response: Response) {
        const id = Number(request.params.id)

        const { name, login, password, phoneNumber, accessProfile, email } = request.body

        const service = new SystemUserService();
        const result = await service.update(
            { id, name, login, password, phoneNumber, accessProfile, email }
        )

        if (result instanceof Error) {
            response.status(404).json(result.message);
        }

        return response.json(result);
    }

}