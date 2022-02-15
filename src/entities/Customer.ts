import { Schema, model } from 'mongoose';
import ICustomer from '@interfaces/ICustomer';

const CustomerSchema = new Schema<ICustomer>(
  {
    name: {
      type: String,
      required: true,
    },
    document: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
);

export default model<ICustomer>('Customers', CustomerSchema);
