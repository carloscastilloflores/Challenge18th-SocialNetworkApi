const { Schema, model } = require('mongoose'); 
const mongoose = require('mongoose');

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
        friends: [
            {
                type:Schema.Types.ObjectId,
                ref: 'User',
            },
        ],
    }
);

userSchema.virtual('friendsCount').get(function () {
    return this.friends.length;
});

const User = mongoose.model('user', userSchema);

// User.find({})
//   .exec()
//   .then(async collection => {
//     if(collection.length === 0) {
//       try {
//         const insertedUsers = await User
//           .instertMany([
//             { username: 'annabanana', email: 'AnnaVillaseñor22@email.com' },
//             { username: 'frishakttmp', email: 'AnnaVillaseñor22@email.com' },
//           ]);
//         console.log('Insterted users:', insertedUsers);
//       } catch (insertedError) {
//         console.log(insertedError);
//       }
//     }
//   });

module.exports = User; 