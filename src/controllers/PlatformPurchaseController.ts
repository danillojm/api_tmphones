import { Request, Response } from "express";
import { PlatformPurchaseService } from "../services/PlatformPurchaseService";

export class PlatformPurchaseController {

    async insert(req: Request, res: Response) {

        const { name, url, logoImg, totalValue } = req.body

        const service = new PlatformPurchaseService();

        const result = service.insert({ name, url, logoImg, totalValue });

        return res.json(result);

    }

    async getAll(req: Request, res: Response) {
        const service = new PlatformPurchaseService()
        const platformPurchases = await service.getAll()
        return res.json(platformPurchases)
    }
    async getById(request: Request, response: Response) {
        const id = Number(request.params.id)
        const service = new PlatformPurchaseService();
        const platformPurchase = await service.getById(id)

        return response.json(platformPurchase);
    }
    async delete(req: Request, resp: Response) {
        const { id } = req.params

        const service = new PlatformPurchaseService();
        const result = await service.delete(id);

        if (result instanceof Error) {
            resp.status(404).json(result.message);
        }

        return resp.status(204).end;
    }
    async update(request: Request, response: Response) {
        const id = Number(request.params.id)

        const { name, url, logoImg, totalValue } = request.body

        const service = new PlatformPurchaseService();
        const result = await service.update({ id, name, url, logoImg, totalValue })

        if (result instanceof Error) {
            response.status(404).json(result.message);
        }

        return response.json(result);
    }
}