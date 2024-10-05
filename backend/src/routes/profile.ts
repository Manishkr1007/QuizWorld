import express, { Request, Response, NextFunction } from 'express';
import { getProfile, updateProfile } from '../controllers/profile';
import { authenticate } from '../middlewares/authenticate';

const router = express.Router();

// Route to get the profile, protected with `authenticate`
router.get('/profile', authenticate as unknown as (req: Request, res: Response, next: NextFunction) => void, getProfile as unknown as (req: Request, res: Response) => Promise<Response>);

// Route to update the profile, protected with `authenticate`
router.put('/profile', authenticate as unknown as (req: Request, res: Response, next: NextFunction) => void, updateProfile as unknown as (req: Request, res: Response) => Promise<Response>);

export default router;
