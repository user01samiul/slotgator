import mongoose, { Document, Schema } from "mongoose";

export interface IContactForm extends Document {
  name: string;
  email: string;
  phone: string;
  company: string;
  serviceType: string[];
  otherService?: string;
  budget?: string;
  message?: string;
  read: boolean;
  createdAt: Date;
}

const ContactFormSchema: Schema<IContactForm> = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    serviceType: {
      type: [String],
      enum: ["Outsourcing IT", "DevOps", "Software Development", "Asistență tehnică", "Altele"],
      required: true,
    },
    otherService: {
      type: String,
      required: false,
    },
    budget: {
      type: String,
      enum: ["Sub 1000€", "1000€ - 3000€", "Peste 3000€", "Nu doresc să specific"],
      required: false,
    },
    message: {
      type: String,
      required: false,
    },
    read: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Contact =
  (mongoose.models?.Contact as mongoose.Model<IContactForm>) ||
  mongoose.model<IContactForm>("Contact", ContactFormSchema);
export default Contact;