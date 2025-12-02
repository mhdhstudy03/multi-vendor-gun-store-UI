import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { VendorsModule } from './vendors/vendors.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [ProductsModule, VendorsModule, AdminModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
