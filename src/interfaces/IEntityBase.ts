import { ObjectId } from 'mongoose';

interface IEntityBase {
  id?: string;
  _id?: string | ObjectId;
  createdAt?: Date;
  updatedAt?: Date;
}

export default IEntityBase;
