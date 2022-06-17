import { Request, Response } from "express";
import { StockService } from "../services/StockService";

export class StockController {



    async insert(request: Request, response: Response) {
        const { product_id, quantity, unitPrice, totalPrice, color, brand, purchase_id } = request.body;
        const service = new StockService();
        console.log('Passou aqui ')
        const result = await service.insert({ product_id, quantity, unitPrice, totalPrice, color, brand, purchase_id });
      
        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }
      
        return response.json(result);
    }

    async getAll(request: Request, response: Response) {
        const service = new StockService();
        const stock = await service.getAll()
        response.json(stock);
    }

}