const router = require('express').Router();
const userRoutes = require('./userRoutes');
const studentRoutes = require('./studentRoutes');

router.use('/users', userRoutes);
router.use('/thoughts', studentRoutes);

module.exports = router;
