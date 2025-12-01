import { Controller, Get } from '@nestjs/common';
import { Vendor, VendorsService } from './vendors.service';

@Controller('vendors')
export class VendorsController {
  constructor(private readonly vendorsService: VendorsService) {}

  @Get()
  findAll(): Vendor[] {
    return this.vendorsService.findAll();
  }
}
