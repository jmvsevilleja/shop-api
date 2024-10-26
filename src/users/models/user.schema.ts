import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class Permission {
  @Prop({ required: false })
  name?: string;

  @Prop({ required: false })
  guard_name?: string;

  @Prop({ required: false })
  pivot?: any; // Define a proper type if available
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
  profile?: any; // Define a proper type if available

  @Prop({ type: [Object], required: false }) // Adjust as necessary
  shops?: any[];

  @Prop({ required: false })
  managed_shop?: any; // Define a proper type if available

  @Prop({ default: true })
  is_active?: boolean;

  @Prop({ type: [Object], required: false }) // Adjust as necessary
  address?: any[];

  @Prop({ type: [PermissionSchema], required: false })
  permissions?: Permission[];

  @Prop({ required: false })
  wallet?: any;
}

export const UserSchema = SchemaFactory.createForClass(User);