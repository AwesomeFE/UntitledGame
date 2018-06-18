import { Schema } from 'mongoose';

const EnemySchema = new Schema({
  description: {
    type: String
  }
}, {timestamps: true});

export default EnemySchema;