import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Pivot } from './pivot.interface';
import { Profile } from '../entities/profile.entity';
import { Shop } from 'src/shops/entities/shop.entity';
import { Wallet } from './wallet.interface';
import { Address } from './address.interface';

export type UserDocument = User & Document;

@Schema()
export class Permission {
  @Prop({ required: false })
  name?: string;

  @Prop({ required: false })
  guard_name?: string;

  @Prop({ type: Object, required: false })
  pivot?: Pivot;
}

export const PermissionSchema = SchemaFactory.createForClass(Permission);

@Schema()
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: false })
  password?: string;

  @Prop({ required: false })
  profile?: Profile; // Define a proper type if available

  @Prop({ type: [Object], required: false }) // Adjust as necessary
  shops?: Shop[];

  @Prop({ required: false })
  managed_shop?: Shop; // Define a proper type if available

  @Prop({ default: true })
  is_active?: boolean;

  @Prop({ type: [Object], required: false }) // Adjust as necessary
  address?: Address[];

  @Prop({ type: [PermissionSchema], required: false })
  permissions?: Permission[];

  @Prop({ type: Object, required: false })
  wallet?: Wallet;
}

export const UserSchema = SchemaFactory.createForClass(User);