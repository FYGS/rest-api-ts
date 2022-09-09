import mongoose, { Date, Schema } from "mongoose";

export interface Contact {
  firstName: string;
  lastName: string;
  email?: string;
  company?: string;
  phone?: string;
  createdAt?: Date
}

const contactSchema = new Schema<Contact>({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  company: {
    type: String,
  },
  phone: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Contact = mongoose.model('Contact', contactSchema);
