import { Schema } from 'mongoose';

const ConsumableSchema = new Schema({
  buff: [{
    type: Schema.Types.ObjectId,
    ref: 'buff'
  }]
}, {timestamps: true});

export default ConsumableSchema;