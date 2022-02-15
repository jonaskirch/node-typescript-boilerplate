import { Request, Response } from 'express';
import CustomerService from '@services/Customer';
import AppError from 'errors/AppError';
import documentValidator from '@validators/document';
import Customer from '@entities/Customer';

class Customers {
  public async show(req: Request, res: Response): Promise<Response> {
    const { document } = req.params;
    if (!documentValidator.isValid(document)) {
      throw new AppError('Invalid Document');
    }
    const customer = await CustomerService.findByDocument(document);
    if (!customer) {
      return res.status(204).json();
    }
    return res.json(customer);
  }

  public async index(req: Request, res: Response): Promise<Response> {
    const customers = await Customer.find();
    return res.json(customers);
  }

  public async store(req: Request, res: Response): Promise<Response> {
    const customer = await CustomerService.createOrUpdate(
      req.body.document,
      req.body,
    );
    return res.json(customer);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { document } = req.params;
    const customer = await CustomerService.createOrUpdate(document, req.body);
    return res.json(customer);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const deleted = await Customer.findByIdAndDelete(id);
    return res.json(deleted);
  }
}

export default new Customers();
