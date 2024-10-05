import { Request, Response } from 'express';
import Profile from '../models/profile';

interface CustomRequest extends Request {
    user: any;
}

export const getProfile = async (req: CustomRequest, res: Response) => {
  try {
    const profile = await Profile.findOne({ userId: req.user._id });
    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }
    res.json(profile);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const updateProfile = async (req: CustomRequest, res: Response) => {
  const { name, age, bio } = req.body;

  try {
    const profile = await Profile.findOneAndUpdate(
      { userId: req.user._id },
      { name, age, bio },
      { new: true }
    );
    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }
    res.json(profile);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
