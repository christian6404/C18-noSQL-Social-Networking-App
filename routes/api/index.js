const router = require('express').Router();
const thoughts = require('./thoughtsRoutes')
const users = require('./userRoutes')

router.use('/thoughts', thoughts);
router.use('/user', users);

module.exports = router