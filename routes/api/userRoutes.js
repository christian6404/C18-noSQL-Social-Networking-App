const router = require('express').Router();
const{
    getUser,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addUserFriend,
    deleteUserFriend,
} = require('../../controllers/userController');

router.route('/').get(getUser).post(createUser);

router.route('/:userId').get(getSingleUser).delete(deleteUser);

router.route('/:userId/friends/:friendId').post(addUserFriend).delete(deleteUserFriend);

module.exports = router;