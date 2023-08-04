const router = require('express').Router();
const userRoutes = require('./userRoutes');
const studentRoutes = require('./studentRoutes');

router.use('/user', userRoutes);
router.use('/thoughts', studentRoutes);

module.exports = router;
