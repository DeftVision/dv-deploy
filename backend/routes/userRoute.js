const express = require('express');
const router = express.Router();

const { newUser, getUsers } = require('../controllers/userController');

router.get('/', getUsers);
router.post('/', newUser);

module.exports = router;