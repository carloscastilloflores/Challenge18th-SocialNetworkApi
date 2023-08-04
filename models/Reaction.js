const { Schema, model } = require('mongoose'); 
const reactionSchema = require('./Reaction.js');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: mongoose.Types.ObjectId,
        },
        reactionBody: {
            type: String,
            required: true,
            max_length: 280
        }, 
        username: { 
            type: String, 
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,  
            get: function() {
                return this.date.toLocaleString();
        },
        }
    }
);

const Reaction = model('reaction', reactionSchema);

module.exports = Reaction; 