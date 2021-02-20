const express= require('express');
const router =express.Router();

const unlikepath =require('../controller/users.js')
router.get('/unlike',unlikepath.unlikeUsers);

module.exports=router;