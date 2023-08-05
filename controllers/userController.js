const { User, Thought } = require('../models');
// const { ObjectId } = require('mongoose').Types;

const router = require('../routes');

module.exports = {
//Get all users 
    async getUsers(req, res) {
        try {
            const users = await User.find(); 
            res.json(users); 
        } catch (err) {
            res.status(500).json(err);
        }
    },
// GET a single user by its _id and populated thought and friend data.
    async getSingleUser(req, res) {
        try {
            const user = await User.findOne({_id: req.params._id})
                .select('-__v')
                .populate('thought')
                .populate('friend');
                //Not sure how this is syntaxed
            if (!user) {
                return res.status(404).json({ message: 'No user with that ID'});
            }

            res.json(user); 
        } catch (err) {
            res.status(500).json(err); 
        }
    },
//POST a new user:
//// example data
// {
//     "username": "lernantino",
//     "email": "lernantino@gmail.com"
//   }
    async createUser(req, res) {
    try {
        const user = await User.create(req.body); 
        res.json(user); 
    } catch(err) {
        console.log(err); 
        return res.status(500).json(err);
    }
    },
    async updateUser(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                // verify that the syntax is correct, i want to update email and password
                {_id: req.params.ObjectId}, 
                { $set: req.body },
                { runvalidators: true, new: true}
            );
            
            if (!user) {
                res.status(404).json({ message: 'No user with this id!'});
            }

            res.json(user); 
        }   catch (err) {
            res.status(500).json(err);
        }
    },
    async deleteUser(req, res) {
        try {
            const user = await User.findOneAndDelete({ _id: req.params.ObjectId});

            if (!user) {
                return res.status(404).json({ message: 'No user with that ID' });
            }
            
            await Thought.deleteMany({ _id: { $in: user.thoughts } }); 
            await Reaction.deleteMany({ _id: {$in: user.thoughts.reaction} });
            //Pending, not sure this is the right syntax
            res.json({ message: 'User, thoughts and reactions deleted'})
        }   catch (err) {
            res.status(500).json(err);
        }
    },
    async addFriend(req, res) {
      console.log('You are adding an new friend to users list');
      console.log(req.body);

      try {
        const user = await User.findOneAndUpdate(
          { _id: req.params.userId },
          { $addToSet: { friend: req-body } }, //Pending
          { runValidators: true, new: true }
        );

        if (!user) {
          return res
            .status(404)
            .json({ message: 'No user found with that ID'});
        }
        res.json(user);
      } catch (err) {
        res.status(500).json(err);
      }
    },
    async deleteFriend(req, res) {
      try {
        const user = await User.findOneAndDelete(
          { _id: req.params.userId },
          { $pull: {friends: {ObjectId: req.params.ObjectId } } },
          { runValidators: true, new: true }
        )

        res.json(user); 
      } catch (err){
        res.json(500).json(err);
      }
    },
};





// PUT to update a user by its _id

// DELETE to remove user by its _id
