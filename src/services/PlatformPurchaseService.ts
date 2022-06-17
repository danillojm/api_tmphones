import { PlatformPurchase } from './../model/PlatformPurchase';
import { getRepository } from "typeorm";


type PlatformPurchaseRequest = {
    name: string;
    url: string;
    logoImg: string;
    totalValue: number;
}
type PlatformPurchaseUpdateRequest = {
    id: number
    name: string;
    url: string;
    logoImg: string;
    totalValue: number;
}

export class PlatformPurchaseService {



    async getAll() {
        const repo = getRepository(PlatformPurchase);
        const platformPurchases = await repo.find();
        return platformPurchases
    }

    async getById(id: number) {
        const repo = getRepository(PlatformPurchase);
        const platformPurchase = await repo.findOne(id);
        return platformPurchase;
    }


    async insert({ name, url, logoImg, totalValue }: PlatformPurchaseRequest): Promise<PlatformPurchase> {

        const repository = getRepository(PlatformPurchase);
        const platformPurchase = repository.create({
            name, url, logoImg, totalValue
        })

        await repository.save(platformPurchase)
        return platformPurchase
    }

    async delete(id: string) {
        const repo = getRepository(PlatformPurchase);

        if (!(await repo.findOne(id))) {
            return new Error("platformPurchase does not exist");
        }

        await repo.delete(id)

    }

    async update({ id, name, url, logoImg, totalValue }: PlatformPurchaseUpdateRequest) {

        const repo = getRepository(PlatformPurchase);

        const platformPurchase = await repo.findOne(id)

        if (!platformPurchase) {
            return new Error("platformPurchase does not exist");
        }

        platformPurchase.name = name
        platformPurchase.url = url;
        platformPurchase.logoImg = logoImg;
        platformPurchase.totalValue = totalValue;

        await repo.save(platformPurchase)

        return platformPurchase
    }

}
