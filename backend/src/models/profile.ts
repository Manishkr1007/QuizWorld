import mongoose, { Schema, Document } from 'mongoose';

// Profile interface for TypeScript
export interface ProfileDocument extends Document {
  userId: string;
  name: string;
  email: string;
  score:number;
  age: number;
  bio?: string;
}

// Profile schema
const profileSchema: Schema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  score:{
    type:Number,
    required:true
  },
  age: {
    type: Number,
    required: true,
  },
  bio: {
    type: String,
  },
});

const Profile = mongoose.model<ProfileDocument>('Profile', profileSchema);

export default Profile;
