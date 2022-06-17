import { getRepository } from "typeorm";
import { Category } from "../model/Category";
import { Service } from "./service";


type CategoryRequest = {
    name: string,
    description: string
}

type CategoryRequestUpdate = {

    id: string
    name: string,
    description: string
}

export class CategoryService implements Service {


    async insert({ name, description }: CategoryRequest): Promise<Category | Error> {
        const repo = getRepository(Category);

        if (await repo.findOne({ name })) {
            return new Error("Category already exists");
        }

        const category = repo.create({
            name,
            description
        });

        await repo.save(category);

        return category;
    }


    async getAll() {
        const repo = getRepository(Category);
        const categories = await repo.find(

        );
        return categories;
    }


    async delete(id: string) {
        const repo = getRepository(Category);

        if (!(await repo.findOne(id))) {
            return new Error("Category does not exist");
        }

        await repo.delete(id)

    }

    async update({ id, name, description }: CategoryRequestUpdate) {

        const repo = getRepository(Category);

        const category = await repo.findOne(id)

        if (!category) {
            return new Error("Category does not exist");
        }

        category.name = name;
        category.description = description

        await repo.save(category)

        return category
    }
}
