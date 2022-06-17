import { Request, Response } from "express";
import { PurchaseService } from "../services/PurchaseService";
export class PurchaseController {

    async insert(request: Request, response: Response) {

        const { purchaseDate, platformpurchase_id, storeName, orderId, product_id,
            quantity, unitPrice, totalPrice, trackingCode, observation, color, status } = request.body;

        const service = new PurchaseService();
        const result = await service.insert({
            purchaseDate, platformpurchase_id, storeName, orderId, product_id,
            quantity, unitPrice, totalPrice, trackingCode, observation, color, status
        });


        response.json(result);

    }

    async getAll(request: Request, response: Response) {

        const service = new PurchaseService();
        const purchase = await service.getAll()
        response.json(purchase);

    }
    async getById(request: Request, response: Response) {
        const id = Number(request.params.id)
        const service = new PurchaseService();
        const purchase = await service.getById(id)

        return response.json(purchase);
    }

    async delete(request: Request, response: Response) {
        const id = Number(request.params.id)

        const service = new PurchaseService();
        const result = await service.delete(id);
        console.log(result)
        if (result instanceof Error) {
            response.status(404).json(result.message);
        }

        return response.status(204).end();
    }
    async update(request: Request, response: Response) {
        const id = Number(request.params.id)

        const { productArrived, trackingCode, status, color, observation } = request.body

        const service = new PurchaseService();
        const result = await service.update({
            id, productArrived, trackingCode, status, color, observation
        })

        if (result instanceof Error) {
            response.status(404).json(result.message);
        }

        return response.json(result);
    }

}