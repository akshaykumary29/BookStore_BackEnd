import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      require: true
    },
    lastName: {
      type: String,
      require: true
    },
    email: {
      type: String,
      require: true
    },
    password: {
      type: String,
      require: true
    }
  },
  {
    timestamps: true
  }
);

export default model('User', userSchema);
