//only for registration form

import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  password?: string;
  imageUrl?: string;
  authProviderId?: string;
  createdAt?: Date;
  resetPasswordToken?: string;
  resetPasswordExpires?: number;
}

const UserSchema: Schema<IUser> = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, select: false },
  role: { type: String, default: "user" },
  imageUrl: { type: String },
  authProviderId: { type: String },
  createdAt: { type: Date, default: Date.now },
  resetPasswordToken: { type: String },
  resetPasswordExpires: { type: Number },
});

const User =
  (mongoose.models?.User as mongoose.Model<IUser>) ||
  mongoose.model<IUser>("User", UserSchema);
export default User;
