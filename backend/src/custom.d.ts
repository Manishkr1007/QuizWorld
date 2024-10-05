import { UserDocument } from './models/user'; // import your user model type if necessary

declare global {
  namespace Express {
    interface Request {
      user?: UserDocument; // or whatever your user type is
    }
  }
}
