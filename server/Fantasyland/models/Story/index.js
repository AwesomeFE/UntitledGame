import { Schema } from 'mongoose';

const StorySchema = new Schema({
  name: {
    type: String
  },
  contents: [{
    text: {
      type: String
    },
    images: [{
      isActive: {
        type: Boolean
      },
      style: {
        type: String
      },
      image: {
        type: Schema.Types.ObjectId,
        ref: 'image'
      }
    }]
  }]
}, {timestamps: true});

export default StorySchema;
