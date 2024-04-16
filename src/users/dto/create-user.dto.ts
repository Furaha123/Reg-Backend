import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  role: { type: String, enum: ['user', 'manager'], default: 'user' },
});

export class CreateUserDto {
  name: string;
  email: string;
  role: 'user' | 'manager';
}
