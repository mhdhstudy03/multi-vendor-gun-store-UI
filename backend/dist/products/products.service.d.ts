export interface Product {
    id: number;
    name: string;
    vendor: string;
    price: number;
    category: string;
}
export declare class ProductsService {
    private readonly products;
    findAll(): Product[];
    findOne(id: number): Product | undefined;
}
