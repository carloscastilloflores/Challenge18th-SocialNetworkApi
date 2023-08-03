const { Schema, model } = require('mongoose'); 

const userSchema = new Schema(
    {
        username: {
            type: String, 
            unique: true,
            required: true, 
            trimmed: true,
        },
        email: {
            type: String, 
            required: true, 
            unique: true, 
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
        }, 
        thoughts: [
            {
                type:Schema.Types.ObjectId,
                ref: 'Thought',
            },
        ],
    }
);

const User = model('user', userSchema);

