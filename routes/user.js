const { getUsers, getUser, updateUser, deleteUser } = require('../controllers/user');
const { verifyAdmin, verifyUser } = require('../utils/verifyUsers');
const router =require('express').Router();

router.get('/getallUsers',verifyAdmin,getUsers)
router.get('/getUser/:id',verifyUser,getUser)
router.put('/updateUser/:id',verifyUser,updateUser)
router.delete('/deleteUser/:id',verifyUser,deleteUser)

module.exports=router