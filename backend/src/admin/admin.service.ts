import { Injectable } from '@nestjs/common';
import { ProductsService } from '../products/products.service';
import { VendorsService } from '../vendors/vendors.service';

@Injectable()
export class AdminService {
  constructor(
    private readonly productsService: ProductsService,
    private readonly vendorsService: VendorsService,
  ) {}

  getDashboardStats() {
    const products = this.productsService.findAll();
    const vendors = this.vendorsService.findAll();

    const totalRevenue = products.reduce((sum, p) => sum + p.price, 0);
    // In a real app, products would have a status field
    const pendingProducts = 0;
    const activeVendors = vendors.length;

    return {
      totalProducts: products.length,
      totalVendors: vendors.length,
      activeVendors,
      pendingProducts,
      totalRevenue,
      averageRating:
        vendors.reduce((sum, v) => sum + v.rating, 0) /
        Math.max(vendors.length, 1),
    };
  }

  approveProduct(productId: number) {
    // In a real app, update product status in database
    return { success: true, message: `Product ${productId} approved` };
  }

  rejectProduct(productId: number, reason?: string) {
    // In a real app, update product status in database
    return { success: true, message: `Product ${productId} rejected`, reason };
  }

  suspendVendor(vendorId: number, reason?: string) {
    // In a real app, update vendor status in database
    return { success: true, message: `Vendor ${vendorId} suspended`, reason };
  }

  activateVendor(vendorId: number) {
    // In a real app, update vendor status in database
    return { success: true, message: `Vendor ${vendorId} activated` };
  }
}
