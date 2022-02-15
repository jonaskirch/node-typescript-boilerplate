import IEntityBase from '@interfaces/IEntityBase';

interface ICustomer extends IEntityBase {
  name: string;
  document: string;
  email: string;
}

export default ICustomer;
