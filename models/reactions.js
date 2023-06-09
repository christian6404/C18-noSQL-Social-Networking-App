const { Schema, Types } = require('mongoose')

const timestamp = Date.now();
const date = new Date(timestamp)
const localDate = date.toLocaleDateString();

const reactionsSchema = new Schema({
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxLength: 280
    },
    username: {
      type: String,
        required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      get: (date) => new Date(date).toLocaleDateString(),
    },
  },
  {
      toJSON: {
          getters: true
        },
        id: false
  }
  );

module.exports = reactionsSchema