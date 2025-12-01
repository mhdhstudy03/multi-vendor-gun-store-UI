export interface Vendor {
    id: number;
    name: string;
    rating: number;
    fulfillment: string;
}
export declare class VendorsService {
    private readonly vendors;
    findAll(): Vendor[];
}
