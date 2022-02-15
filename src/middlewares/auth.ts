import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import authConfig from '@config/auth';
import DocumentValidator from '@validators/document';

export default async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided' });
  }

  // ignora a primeira posicao do array ('Bearer') e pega apenas a segunda posicao
  const [, token] = authHeader.split(' ');

  try {
    const decoded: any = jwt.verify(token, authConfig.secret);

    if (!DocumentValidator.isValid(decoded?.document)) throw new Error();

    return next();
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};
