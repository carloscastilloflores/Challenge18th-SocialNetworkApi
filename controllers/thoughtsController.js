const { ObjectId } = require('mongoose').Types;
const { User, Thought, Reaction } = require('../models');


module.exports = {
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  
  async getSingleThought(req, res) {
    try { 
      const thought = await Thought.findOne({ _id: req.params.ObjectId})
        .select('-__v'); 

      if (!thought) {
        return res.status(404).json({ message: 'No thought with that ID'});
      }

      res.json(thought); 
    } catch (err) {
      res.status(500).json(err);
    }
  }, 
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      res.json(thought);
    } catch (err) {
      console.log(err); 
      return res.status(500).json(err);
      //Pending don't forget to push the created thought's _id to the associated user's thoughts array field∑
    }
  },
  async updateThought(req, res) {
    try {
        const thought = await Thought.findOneAndUpdate(
            {_id: req.params.ObjectId}, 
            { $set: req.body },
            { runvalidators: true, new: true}
        );
        
        if (!thought) {
            res.status(404).json({ message: 'No thought with this id!'});
        }

        res.json(thought); 
    }   catch (err) {
        res.status(500).json(err);
    }
  },
  async deleteThought(req, res) {
    try {
        const thought = await Thought.findOneAndDelete({ _id: req.params.ObjectId});

        if (!thought) {
            return res.status(404).json({ message: 'No thought with that ID' });
        }
    
        res.json({ message: 'Thought deleted'})
    }   catch (err) {
        res.status(500).json(err);
    }
  },
  async createReaction(req, res) {
    try {
      const reaction = await Thought.findOneAndUpdate(
        { _id: req.params.ObjectId },
        { $addToSet: { reaction: req.body } }, //Pending
        { runValidators: true, new: true }
      )
      if (!reaction) {
        return res
          .status(404)
          .json({ message: 'No user found with that ID'});
      }
      res.json(reaction);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async deleteReaction (req, res) {
    try {
      const reaction = await Thought.findOneAndDelete(
        { _id: req.params.ObjectId },
        { $pull: { reactions: { reactionId: req.params.reactionId } } },
        { runValidators: true, new: true }
      );

      if (!reaction) {
          return res.status(404).json({ message: 'No reaction with that ID' });
      }
  
      res.json({ message: 'Reaction deleted'})
  }   catch (err) {
      res.status(500).json(err);
  }
  }
};