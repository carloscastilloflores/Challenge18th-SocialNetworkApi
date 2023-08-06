const connection = require('../config/connection');
const mongoose = require('mongoose');
// const data = require('./data.JS'); // Import the data file

// Import your models
const User = require('../models/User');
const Thought = require('../models/Thought');


mongoose
  .connect('mongodb://127.0.0.1:27017/socialNetDB', {
  useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Mongo Connection Open')
  })
  .catch((err) => {
    console.log(err);
  });

const seedUsers = [
  {
    username: 'MarianaCas21', 
    email: 'marianacas21@email.com', 
    thoughts: [],
  },
  {
    username: 'DiegoVigue11', 
    email: 'dievigue22@email.com', 
    thoughts: [],
  },
  {
    username: 'ValentinaEliza', 
    email: 'valenteliza@email.com', 
    thoughts: [],
  },
  {
    username: 'LuisMG', 
    email: 'luismeg2@email.com', 
    thoughts: [],
  },
  {
    username: 'IsabellaRu33', 
    email: 'isaruiz@email.com', 
    thoughts: [], 
  },
  {
    username: 'CarlosCastillo', 
    email: 'carlosflrs03@email.com', 
    thoughts: [],
  },
  {
    username: 'SofíaAng111', 
    email: 'showa24@email.com', 
    thoughts: [],
  },
  {
    username: 'JoaquínCUU', 
    email: 'joaquinquint@email.com',
    thoughts: [],
  },
  {
    username: 'Ximenikis12', 
    email: 'ximenikis_12@email.com', 
    thoughts: [],
  },
  {
    username: 'MiguelEVA234', 
    email: 'algunlugar@email.com', 
    thoughts: [],
  },
]

const seedThoughts = [
  {
    username: 'MarianaCas21',
    thoughtText: 'Artificial intelligence is changing the world!',
  },
  {
    username: 'MarianaCas21',
    thoughtText: 'The nature of consciousness is fascinating!',
  },
  {
    username: 'DiegoVigue11',
    thoughtText: 'Quantum computing is the future of technology.',
  },
  {
    username: 'DiegoVigue11',
    thoughtText: 'Machine learning algorithms are getting smarter.',
  },
  {
    username: 'ValentinaEliza',
    thoughtText: 'Mindfulness meditation has many benefits.',
  },
  {
    username: 'ValentinaEliza',
    thoughtText: 'Virtual reality is revolutionizing gaming and training.',
  },
  {
    username: 'LuisMG',
    thoughtText: 'The ethics of AI development need careful consideration.',
  },
  {
    username: 'LuisMG',
    thoughtText: 'The future of transportation lies in autonomous vehicles.',
  },
  {
    username: 'CarlosCastillo',
    thoughtText: 'Are we living in a simulation?',
  },
  {
    username: 'CarlosCastillo',
    thoughtText: 'The rise of 5G technology will transform industries.',
  },
  {
    username: 'SofíaAng111',
    thoughtText: 'How can we ensure AI does not perpetuate bias?',
  },
  {
    username: 'SofíaAng111',
    thoughtText: 'Exploring altered states of consciousness.',
  },
  {
    username: 'JoaquínCUU',
    thoughtText: 'The potential of blockchain beyond cryptocurrencies.',
  },
  {
    username: 'JoaquínCUU',
    thoughtText: 'AI is revolutionizing healthcare and diagnostics.',
  },
  {
    username: 'Ximenikis12',
    thoughtText: 'The philosophy of the self.',
  },
  {
    username: 'Ximenikis12',
    thoughtText: 'The impact of automation on the job market.',
  },
  {
    username: 'MiguelEVA234',
    thoughtText: 'AI-generated art challenges traditional notions of creativity.',
  },
  {
    username: 'MiguelEVA234',
    thoughtText: 'The potential of renewable energy sources.',
  },
];



const seedDb = async () => {
  await User.deleteMany({}); 
  await User.insertMany(seedUsers);
  await Thought.deleteMany({}); 
  // const thoughts = await Thought.insertMany(seedThoughts);
  await Thought.insertMany(seedThoughts);
  
    // Loop through the seedThoughts array
    for (const thought of seedThoughts) {
      // Find the user matching the thought's username
      const user = await User.findOne({ username: thought.username });
  
      // If the user is found, add the thought to their thoughts array
      if (user) {
        user.thoughts.push(thought._id);
        await user.save();
      }
    }
};

seedDb()
  .then(() => {
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error(err);
    mongoose.connection.close();
  });

  