import { Injectable } from '@nestjs/common';

export interface Vendor {
  id: number;
  name: string;
  rating: number;
  fulfillment: string;
}

@Injectable()
export class VendorsService {
  private readonly vendors: Vendor[] = [
    {
      id: 1,
      name: 'Northern Tactical Co.',
      rating: 4.9,
      fulfillment: '48h avg fulfillment',
    },
    {
      id: 2,
      name: 'SureShot Defense',
      rating: 4.8,
      fulfillment: 'Same-day drop ship',
    },
  ];

  findAll(): Vendor[] {
    return this.vendors;
  }
}
