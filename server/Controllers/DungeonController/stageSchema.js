import { Schema } from 'mongoose';

const StageSchema = new Schema({
  name: {
    type: String
  },
  order: {
    type: Number
  },
  enemys: [{
    type: Schema.Types.ObjectId,
    ref: 'enemys'
  }]
}, {timestamps: true});

export default StageSchema;