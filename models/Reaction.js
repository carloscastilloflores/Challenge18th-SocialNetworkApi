const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280, // Corrected 'max_length' to 'maxlength'
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: formatTime,
     },  
    },
    {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

function formatTime(time){
  let formattedTime = new Date(time)
  return formattedTime.toLocaleString()
}

// const Reaction = model('Reaction', reactionSchema); // Capitalized 'Reaction' for the model name

module.exports = reactionSchema;