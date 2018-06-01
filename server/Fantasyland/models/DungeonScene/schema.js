import { Schema } from 'mongoose';

const DungeonSceneSchema = new Schema({
  name: {
    type: String
  },
  items: [{
    probability: {
      type: Number
    },
    item: {
      type: Schema.Types.ObjectId,
      ref: 'item'
    }
  }]
}, {
  timestamps: true,
  discriminatorKey: 'type'
});

export default DungeonSceneSchema;