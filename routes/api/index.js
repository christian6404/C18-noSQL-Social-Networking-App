const router = require('express').Router();
const thoughts = require('./thoughtsRoutes')
const user = require('./userRoutes')

router.use('/thoughts', thoughts);
router.use('/user', user);

module.exports = router