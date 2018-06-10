import { Schema } from 'mongoose';

const UserSchema = new Schema({
  username:  {
    type: String,
    unique: true,
    sparse: true
  },
  password: {
    type: String,
    required: true
  },
  players: [{
    type: Schema.Types.ObjectId,
    ref: 'players'
  }],
  projection: {
    type: String,
    default: 'password __v updatedAt createdAt projection'
  },
  isAdmin: {
    type: Boolean,
    default: false
  }
}, {timestamps: true});

export default UserSchema;