import { Request, Response } from "express"
import { CategoryService } from "../services/CategoryService"

export class CategoryController {

    async insert(req: Request, res: Response) {
        const { name, description } = req.body

        const service = new CategoryService()

        const result = await service.insert({ name, description });

        if (result instanceof Error) {
            return res.status(400).json(result.message);
        }
        return res.json(result);
    }


    async getAll(request: Request, response: Response) {

        const service = new CategoryService();
        const categories = await service.getAll()
        return response.json(categories);
    }

    async delete(req: Request, resp: Response) {
        const { id } = req.params

        const service = new CategoryService();
        const result = await service.delete(id);

        if (result instanceof Error) {
            resp.status(404).json(result.message);
        }

        return resp.status(204).end;
    }


    async update(req: Request, resp: Response) {

        const { id } = req.params
        const { name, description } = req.body

        const service = new CategoryService();
        const result = await service.update({ id, name, description })

        if (result instanceof Error) {
            resp.status(404).json(result.message);
        }

        return resp.json(result);
    }

}