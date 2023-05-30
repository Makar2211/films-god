import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      required: true,
      type: String,
    },
    lastName: String,
    email: {
      unique: true,
      required: true,
      type: String,
    },
    password: {
      required: true,
      type: String,
    },
    imageURL: String,
  },
  {
    timestamps: true,
  },
);

export default mongoose.model('User', UserSchema);
