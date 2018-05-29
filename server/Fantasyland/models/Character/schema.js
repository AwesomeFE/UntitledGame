import { Schema } from 'mongoose';

const CharacterSchema = new Schema({
  name: {
    type: String,
    unique: true
  },
  gender: {
    type: String,
    enum: [ 'male', 'female' ]
  },
  XP: {
    type: Number
  },
  HP: {
    type: Number
  },
  MP: {
    type: Number
  },
  career: {
    type: Schema.Types.ObjectId
  },
  SP: {
    type: Number
  },
  AP: {
    type: Number
  },
  ability: {
    STR: {
      type: Number
    },
    AGI: {
      type: Number
    },
    VIT: {
      type: Number
    },
    INT: {
      type: Number
    },
    DEX: {
      type: Number
    },
    LUK: {
      type: Number
    }
  },
  lastPosition: {
    x: {
      type: Number
    },
    y: {
      type: Number
    },
    z: {
      type: Number
    },
    mapId: {
      type: Schema.Types.ObjectId
    }
  },
  skills: [{
    type: Schema.Types.ObjectId,
    ref: 'skill'
  }],
  items: [{
    type: Schema.Types.ObjectId,
    ref: 'item'
  }],
  buffs: [{
    type: Schema.Types.ObjectId,
    ref: 'buff'
  }]
}, {timestamps: true});

export default CharacterSchema;