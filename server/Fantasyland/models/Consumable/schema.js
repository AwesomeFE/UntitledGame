import { Schema } from 'mongoose';

const ConsumableSchema = new Schema({
  buffs: [{
    type: Schema.Types.ObjectId,
    ref: 'buff'
  }],
  resources: {
    thumbnail: {
      type: String
    }
  }
}, {timestamps: true});

export default ConsumableSchema;