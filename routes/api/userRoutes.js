const router = require('express').Router();


router.route('/').get(getUsers).post(createUser);

router.route('_/:userId/friends/friendsId')

module.exports = router;