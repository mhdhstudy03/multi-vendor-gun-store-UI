import {
  Controller,
  Get,
  Post,
  Param,
  ParseIntPipe,
  UseInterceptors,
  UploadedFiles,
  Body,
} from '@nestjs/common';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { Product, ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  findAll(): Product[] {
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Product | undefined {
    return this.productsService.findOne(id);
  }

  @Post('upload')
  @UseInterceptors(
    AnyFilesInterceptor({
      storage: diskStorage({
        destination: (req, file, cb) => {
          if (file.fieldname === 'video') {
            cb(null, './uploads/videos');
          } else {
            cb(null, './uploads/images');
          }
        },
        filename: (req, file, cb) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          const prefix = file.fieldname === 'video' ? 'video' : 'image';
          cb(null, `${prefix}-${uniqueSuffix}${extname(file.originalname)}`);
        },
      }),
      limits: {
        fileSize: 100 * 1024 * 1024, // 100MB max
      },
    }),
  )
  uploadProduct(
    @UploadedFiles() files: Express.Multer.File[],
    @Body()
    body: {
      name: string;
      description: string;
      price: string;
      category: string;
    },
  ) {
    const images = files.filter((f) => f.fieldname === 'images');
    const video = files.find((f) => f.fieldname === 'video');

    // In a real app, you'd save product data to database
    // For now, just return success with file info
    return {
      success: true,
      message: 'Product uploaded successfully',
      product: {
        name: body.name,
        description: body.description,
        price: parseFloat(body.price),
        category: body.category,
      },
      files: {
        images: images.map((img) => ({
          filename: img.filename,
          originalName: img.originalname,
          size: img.size,
          path: img.path,
        })),
        video: video
          ? {
              filename: video.filename,
              originalName: video.originalname,
              size: video.size,
              path: video.path,
            }
          : null,
      },
    };
  }
}
