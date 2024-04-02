import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './schemas/product.schema';

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://debian:lZuzJWmFLVLCFsuf@clusterd.5dl9ps5.mongodb.net/?retryWrites=true&w=majority&appName=ClusterD`,
    ),
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
  ],
  exports: [MongooseModule],
})
export class DatabaseModule {}
