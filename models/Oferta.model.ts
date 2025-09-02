// models/Oferta.model.ts
import mongoose, { Document, Schema } from "mongoose";

export interface IContactForm extends Document {
  fullName: string;
  email: string;
  phone: string;
  extension?: string;
  company: string;
  website?: string;
  collaborationType: string[];
  otherCollaboration?: string;
  needsDescription: string;
  technologies?: string; // Changed to string
  budget?: string;
  startTimeline?: string;
  consultPreference?: string;
  agreeTerms: boolean;
  receiveUpdates?: boolean;
  read: boolean;
  createdAt: Date;
}

const ContactFormSchemaOferta: Schema<IContactForm> = new Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    extension: { type: String, required: false },
    company: { type: String, required: true },
    website: { type: String, required: false },
    collaborationType: {
      type: [String],
      enum: [
        "Outsourcing IT",
        "Dezvoltare software custom",
        "DevOps & Cloud Engineering",
        "Securitate IT & Cybersecurity",
        "Asistență tehnică continuă",
        "Consultanță IT",
        "Altele",
      ],
      required: true,
    },
    otherCollaboration: { type: String, required: false },
    needsDescription: { type: String, required: true },
    technologies: { type: String, required: false }, // Changed to string
    budget: {
      type: String,
      enum: [
        "Sub 1000€",
        "1000€ - 3000€",
        "3000€ - 5000€",
        "Peste 5000€",
        "Nu doresc să specific",
      ],
      required: false,
    },
    startTimeline: {
      type: String,
      enum: [
        "Immediăt",
        "În următoarele 1-2 luni",
        "Analizăm pentru viitor",
        "Nu am stabilit încă",
      ],
      required: false,
    },
    consultPreference: {
      type: String,
      enum: [
        "Da, doresc o întâlnire online",
        "Doar prin email",
        "Nu sunt disponibil",
      ],
      required: false,
    },
    agreeTerms: { type: Boolean, required: true },
    receiveUpdates: { type: Boolean, required: false },
    read: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Oferta =
  (mongoose.models?.Oferta as mongoose.Model<IContactForm>) ||
  mongoose.model<IContactForm>("Oferta", ContactFormSchemaOferta);
export default Oferta;