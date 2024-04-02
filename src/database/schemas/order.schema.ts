import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class OrderItem {
  @Prop({ required: true })
  product: string; // You might want to link to the actual Product document

  @Prop({ required: true })
  quantity: number;
}

@Schema()
export class Order extends Document {
  @Prop({ required: true })
  userId: string; // Link this to your User schema

  @Prop({ type: [OrderItem], required: true })
  items: OrderItem[];

  @Prop({ required: true })
  totalPrice: number;

  @Prop()
  deliveryAddress: string;

  @Prop({
    enum: ['pending', 'processing', 'shipped', 'delivered'],
    default: 'pending',
  })
  status: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
