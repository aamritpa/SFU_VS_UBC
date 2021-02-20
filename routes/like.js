const express= require('express');
const router =express.Router();

const likepath= require('../controller/users.js');

router.get('/like',likepath.likeUsers);

module.exports=router;