const { Schema, model } = require('mongoose'); 
const reactionSchema = require('./Reaction.js');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String, 
            required: true, 
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date, 
            default: Date.now,
            get: formatTime,
        }, 
        username: { 
            type: String, 
            required: true
        },
        reactions: [reactionSchema],
    },
    {
        toJSON: {
          virtuals: true,
          getters: true,
        },
        id: false,
      }
);

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

function formatTime(time){
  let formattedTime = new Date(time)
  return formattedTime.toLocaleString()
}

const Thought = model('Thought', thoughtSchema);

module.exports = Thought; 