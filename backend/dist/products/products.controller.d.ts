import { Product, ProductsService } from './products.service';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    findAll(): Product[];
    findOne(id: number): Product | undefined;
    uploadProduct(files: Express.Multer.File[], body: {
        name: string;
        description: string;
        price: string;
        category: string;
    }): {
        success: boolean;
        message: string;
        product: {
            name: string;
            description: string;
            price: number;
            category: string;
        };
        files: {
            images: {
                filename: string;
                originalName: string;
                size: number;
                path: string;
            }[];
            video: {
                filename: string;
                originalName: string;
                size: number;
                path: string;
            } | null;
        };
    };
}
