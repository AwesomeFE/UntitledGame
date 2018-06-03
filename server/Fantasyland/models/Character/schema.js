import { Schema } from 'mongoose';

const CharacterSchema = new Schema({
  name: {
    type: String,
    unique: true
  },
  gender: {
    type: String,
    default: 'male',
    enum: [ 'male', 'female' ]
  },
  XP: {
    type: Number,
    default: 0
  },
  HP: {
    type: Number,
    default: 0
  },
  MP: {
    type: Number,
    default: 0
  },
  career: {
    type: Schema.Types.ObjectId
  },
  SP: {
    type: Number,
    default: 0
  },
  AP: {
    type: Number,
    default: 0
  },
  ability: {
    STR: {
      type: Number,
      default: 0
    },
    AGI: {
      type: Number,
      default: 0
    },
    VIT: {
      type: Number,
      default: 0
    },
    INT: {
      type: Number,
      default: 0
    },
    DEX: {
      type: Number,
      default: 0
    },
    LUK: {
      type: Number,
      default: 0
    }
  },
  lastPosition: {
    x: {
      type: Number,
      default: 0
    },
    y: {
      type: Number,
      default: 0
    },
    z: {
      type: Number,
      default: 0
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
  }],
  // 2d 角色模型贴图
  '2Dstanding': {
    type: Schema.Types.ObjectId,
    ref: 'file'
  }
}, {
  timestamps: true,
  toObject: {
    virtuals: true
  },
  toJSON: {
    virtuals: true
  }
});

export default CharacterSchema;