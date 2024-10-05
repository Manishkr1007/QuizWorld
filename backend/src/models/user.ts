import mongoose from 'mongoose';
const schema = mongoose.Schema;

// schema for user
const userSchema = new schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (email: string) {
        // Simple regex for validating email format
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return emailRegex.test(email);
      },
      message: (props: any) => `${props.value} is not a valid email!`,
    },
  },
  password: {
    type: String,
    required: true,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isDeactivated: {
    type: Boolean,
    default: false,
  },
  remainingTry: {
    type: Number,
    default: 3,
  },
  temperoryKey: {  //Helped to generate a temperory key to validate account and have an extra login attempt
    type:String,
    default: ''
  },
  freezeTime: { //It is used to calculate the remaining try if account is blocked due to maximum invalid tries
    type: Date,
    default: new Date()
  },
  accountBlocked: { //It shows whether the account is blocked or not
    type: Boolean,
    default: false
  },
  isTempKeyUsed: { //It shows whether the temperory key is used or not
    type: Boolean,
    default: false
  },
  
 
},
{timestamps: true}
);




// model for user
const User = mongoose.model('User', userSchema);

export default User;
