import { Schema } from 'mongoose';

const PlayerSchema = new Schema({
  stories: [{
    type: Schema.Types.ObjectId,
    ref: 'story'
  }],
  friends: [{
    type: Schema.Types.ObjectId,
    ref: 'player'
  }],
  heros: [{
    type: Schema.Types.ObjectId,
    ref: 'hero'
  }],
}, {timestamps: true});

export default PlayerSchema;