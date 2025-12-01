import { Injectable } from '@nestjs/common';

export interface Product {
  id: number;
  name: string;
  vendor: string;
  price: number;
  category: string;
}

@Injectable()
export class ProductsService {
  private readonly products: Product[] = [
    {
      id: 1,
      name: 'Carbon Edge XM-14',
      vendor: 'Delta North Armory',
      price: 3590,
      category: 'rifle',
    },
    {
      id: 2,
      name: 'Guardian .45 ACP',
      vendor: 'Blackstone Forge',
      price: 920,
      category: 'pistol',
    },
  ];

  findAll(): Product[] {
    return this.products;
  }

  findOne(id: number): Product | undefined {
    return this.products.find((product) => product.id === id);
  }
}
