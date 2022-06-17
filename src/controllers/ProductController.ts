import { Request, Response } from "express";
import { ProductService } from "../services/ProductService";

export class ProductController {


    async insert(req: Request, res: Response) {

        const { code, category_id, brand, observation, description, salePrice } = req.body

        const service = new ProductService();

        const result = service.insert({ code, category_id, brand, observation, description, salePrice });

        return res.json(result);

    }


    async getAll(req: Request, res: Response) {
        const service = new ProductService()
        const products = await service.getAll()
        return res.json(products)
    }

    async getById(request: Request, response: Response) {
        const id = Number(request.params.id)
        const service = new ProductService();
        const product = await service.getById(id)

        return response.json(product);
    }

    async delete(req: Request, resp: Response) {
        const { id } = req.params

        const service = new ProductService();
        const result = await service.delete(id);

        if (result instanceof Error) {
            resp.status(404).json(result.message);
        }

        return resp.status(204).end;
    }
    async update(request: Request, response: Response) {
        const id = Number(request.params.id)

        const { code, category_id, brand, observation, description, salePrice } = request.body

        const service = new ProductService();
        const result = await service.update({ id, code, category_id, brand, observation, description, salePrice })

        if (result instanceof Error) {
            response.status(404).json(result.message);
        }

        return response.json(result);
    }

}