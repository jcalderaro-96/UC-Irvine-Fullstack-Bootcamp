import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface JwtPayload {
  username: string;
}

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    // Return a response if no token is found
    return res.status(401).json({ message: 'No token provided' });
  }

  // Return a Promise for jwt.verify to avoid async callback issue
  return new Promise<void>((resolve, reject) => {
    jwt.verify(token, process.env.JWT_SECRET_KEY as string, (err, decoded) => {
      if (err) {
        return reject(res.status(403).json({ message: 'Invalid token' }));
      }

      // Attach the decoded user to the request object
      (req as any).user = decoded as JwtPayload;

      // Proceed to the next middleware
      return resolve(next());
    });
  });
};
