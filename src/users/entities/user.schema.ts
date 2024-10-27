import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Profile } from './profile.entity';
import { Shop } from 'src/shops/entities/shop.entity';

export type UserDocument = User & Document;


// src/users/models/pivot.interface.ts
export interface Pivot {
  model_id: number;        // The ID of the model (e.g., User ID)
  permission_id: number;   // The ID of the permission
  model_type: string;      // The type of the model (e.g., "Marvel\\Database\\Models\\User")
}

export class Permission {
  @Prop({ required: false })
  name?: string;

  @Prop({ required: false })
  guard_name?: string;

  @Prop({ type: Object, required: false })
  pivot?: Pivot;
}

export const PermissionSchema = SchemaFactory.createForClass(Permission);


export interface Address {
  zip: string;          // The ZIP code
  city: string;         // The city name
  state: string;        // The state name
  country: string;      // The country name
  street_address: string; // The street address
}

export interface Wallet {
  id: number;                // The ID of the wallet
  total_points: number;      // Total points in the wallet
  points_used: number;       // Points that have been used
  available_points: number;  // Points available for use
  customer_id: number;       // ID of the associated customer
  created_at: Date;          // Timestamp of wallet creation
  updated_at: Date;          // Timestamp of last update
}

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