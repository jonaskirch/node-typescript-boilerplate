import { Response, NextFunction } from 'express';
import { ObjectSchema } from 'yup';

const validate =
  (schema: ObjectSchema<any>, path: string) =>
  async (req: any, res: Response, next: NextFunction) => {
    try {
      await schema.validate(req[path]);
      return next();
    } catch (err: any) {
      return res.status(400).json({ errors: err.errors });
    }
  };

export default validate;
