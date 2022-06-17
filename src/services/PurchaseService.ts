import { getRepository } from "typeorm";
import { Purchase } from "../model/Purchase";


type PurchaseRequery = {



    purchaseDate: Date;
    platformpurchase_id: number;
    storeName: string;
    orderId: string;
    product_id: number;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
    trackingCode: string;
    observation: string;
    status: string;
    color: string
}
type PurchaseUpdateRequery = {
    id: number;
    productArrived: boolean
    status: string
    trackingCode: string
    observation: string;
    color: string
}
export class PurchaseService {

    async insert({ purchaseDate, platformpurchase_id, storeName, orderId, product_id,
        quantity, unitPrice, totalPrice, trackingCode, observation, status, color }: PurchaseRequery): Promise<Purchase> {

        const repo = getRepository(Purchase);
        const purchase = new Purchase()

        const dataInput = new Date(purchaseDate)
        const dataFormatada = dataInput.toLocaleDateString('pt-br', { timeZone: 'UTC' })
        console.log(dataFormatada)
        purchase.purchaseDate = new Date(purchaseDate);
        purchase.platformpurchaseId = platformpurchase_id;
        purchase.storeName = storeName;
        purchase.orderId = orderId;
        purchase.productId = product_id;
        purchase.quantity = quantity;
        purchase.unitPrice = unitPrice;
        purchase.totalPrice = totalPrice;
        purchase.trackingCode = trackingCode;
        purchase.observation = observation;
        purchase.status = status;
        purchase.productArrived = false
        purchase.color = color

        repo.insert(purchase);


        return purchase
    }

    async getAll() {
        const repo = getRepository(Purchase);
        const purchase = await repo.find({
            relations: ['platformPurchase', 'product']
        });
        return purchase;
    }

    async getById(id: number) {
        const repo = getRepository(Purchase);
        const purchase = await repo.findOne(id, { relations: ['platformPurchase', 'product'] });

        return purchase;

    }


    async delete(id: number) {

        const repo = getRepository(Purchase);
        const purchase = await repo.findOne(id);

        if (!(purchase)) {

            return new Error("purchase does not exist");
        }
        await repo.delete(id)
    }

    async update({ id, productArrived, trackingCode, status, color, observation }: PurchaseUpdateRequery) {

        const repo = getRepository(Purchase);
        const purchase = await repo.findOne(id);
        if (!purchase) {
            return new Error("Client does not exist");
        }

        //console.log(id,orderId, platformpurchaseId, productArrived, productId, purchaseDate, quantity, status, storeName, totalPrice, trackingCode, unitPrice, updateDate, observation )

        purchase.trackingCode = trackingCode;
        purchase.observation = observation;
        purchase.status = status;
        purchase.productArrived = productArrived
        purchase.updateDate = new Date()
        console.log(purchase)
        purchase.color = color

        /**  orderId
          platformpurchaseId
          productArrived
          productId
          purchaseDate
          quantity
          status
          storeName
          totalPrice
          trackingCode
          unitPrice
          updateDate
          observation
   */


        await repo.save(purchase);

    }

}