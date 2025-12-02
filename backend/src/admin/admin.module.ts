import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { ProductsModule } from '../products/products.module';
import { VendorsModule } from '../vendors/vendors.module';

@Module({
  imports: [ProductsModule, VendorsModule],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
