import { ICategoriesRepository } from "../repositories/ICategoriesRepository";
// criando interface de informações


interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryService {
    // Inicializando meu objeto // O construtuor é um método especial para criar e inicializar
    constructor(private categoriesRepository: ICategoriesRepository) {}
    execute({name, description}: IRequest) {
        // verificação de cadastro //definir categoriesRepository como this para chamar o objeto
        const categoryAlredyExists = 
        this.categoriesRepository.findByName(name);

        if (categoryAlredyExists) {
            throw new Error ("Category Already Exists!!");
        }
        // definir categoriesRepository como this para chamar o objeto
        this.categoriesRepository.create({ name, description });
    }
}

export { CreateCategoryService};