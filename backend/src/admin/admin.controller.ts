import {
  Controller,
  Get,
  Post,
  Param,
  ParseIntPipe,
  Body,
  Delete,
} from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get('stats')
  getStats() {
    return this.adminService.getDashboardStats();
  }

  @Post('products/:id/approve')
  approveProduct(@Param('id', ParseIntPipe) id: number) {
    return this.adminService.approveProduct(id);
  }

  @Post('products/:id/reject')
  rejectProduct(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: { reason?: string },
  ) {
    return this.adminService.rejectProduct(id, body.reason);
  }

  @Post('vendors/:id/suspend')
  suspendVendor(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: { reason?: string },
  ) {
    return this.adminService.suspendVendor(id, body.reason);
  }

  @Post('vendors/:id/activate')
  activateVendor(@Param('id', ParseIntPipe) id: number) {
    return this.adminService.activateVendor(id);
  }

  @Delete('products/:id')
  deleteProduct(@Param('id', ParseIntPipe) id: number) {
    // In a real app, delete from database
    return { success: true, message: `Product ${id} deleted` };
  }

  @Delete('vendors/:id')
  deleteVendor(@Param('id', ParseIntPipe) id: number) {
    // In a real app, delete from database
    return { success: true, message: `Vendor ${id} deleted` };
  }
}
