import { Schema } from 'mongoose';

const PlayerSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  gender: {
    type: String,
    enum: ['male', 'female']
  },
  friends: [{
    type: Schema.Types.ObjectId,
    ref: 'Player'
  }],
  storys: [{
    type: Schema.Types.ObjectId,
    ref: 'Story'
  }],
  items: [{
    type: Schema.Types.ObjectId,
    ref: 'Item'
  }],
  skills: [{
    type: Schema.Types.ObjectId,
    ref: 'Skill'
  }]
}, {timestamps: true});

export default PlayerSchema;