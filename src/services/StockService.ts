import { getRepository } from "typeorm";
import { Stock } from "../model/StockModel";


type StockRequery = {

    product_id: number
    quantity: number
    unitPrice: number
    totalPrice: number
    color: string
    brand: string
    purchase_id: number


}


type StockUpdateRequery = {
    id: number
    product_id: number
    quantity: number
    unitPrice: number
    totalPrice: number
    color: string
    brand: string
    purchase_id: number
}
export class StockService {

    async insert({ product_id, quantity, unitPrice, totalPrice, color, brand, purchase_id }: StockRequery): Promise<Stock> {

        const repo = getRepository(Stock)
        const stock = new Stock()
        console.log("stock");
        stock.productId = product_id;
        stock.quantity = quantity;
        stock.unitPrice = unitPrice;
        stock.totalPrice = totalPrice;
        stock.color = color;
        stock.brand = brand;
        stock.purchaseId = purchase_id
        
        repo.insert(stock);
        console.log(stock);
        return stock
    }
    async getById() {

    }

    async getAll() {
        const repo = getRepository(Stock)
        const stocks = await repo.find({
            relations: ['purchase', 'product']
        })
        return stocks
    }
    delete() {
        const repo = getRepository(Stock)
    }

}