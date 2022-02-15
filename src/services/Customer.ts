import Customer from '@entities/Customer';
import ICustomer from '@interfaces/ICustomer';

class CustomerService {
  public async findByDocument(document: string): Promise<ICustomer | null> {
    let customer: any = await Customer.findOne({ document });

    if (!customer) return null;

    customer = customer.toJSON({ versionKey: false });
    delete customer._id;
    return customer;
  }

  public async createOrUpdate(
    document: string,
    data: ICustomer,
  ): Promise<ICustomer | null> {
    const customer = await Customer.findOneAndUpdate({ document }, data, {
      upsert: true,
      new: true,
      lean: true,
      returnOriginal: false,
    });
    return customer;
  }
}

export default new CustomerService();
