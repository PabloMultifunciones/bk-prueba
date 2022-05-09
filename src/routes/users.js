const { Router } = require('express');
const router = Router();
const usersCtrl = require('../controllers/users.controller');

router.route('/')
    .get(usersCtrl.getUsers)
    .post(usersCtrl.saveUser)

router.route('/:id')
    .delete(usersCtrl.deleteUser)


module.exports = router;