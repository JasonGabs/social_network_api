const { Schema, model } = require('mongoose');

// Schema to create a course model
const thoughtSchema = new Schema(
  {
    thoughtName: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const Thought = model('thoughts', thoughtSchema);

module.exports = Thought;
