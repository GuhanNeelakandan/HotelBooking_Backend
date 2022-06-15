const { createRoom, updateRoom, getRoom, getRooms, deleteRoom, updateRoomAvailability } = require('../controllers/room');
const { verifyAdmin } = require('../utils/verifyUsers');

const router =require('express').Router();

router.post('/createRoom/:hotelid',verifyAdmin,createRoom)
router.put('/updateRoom/:id',verifyAdmin,updateRoom)
router.get('/getRoom/:id',getRoom)
router.get('/getRooms',getRooms)
router.delete('/deleteRoom/:id/:hotelid',verifyAdmin,deleteRoom)
router.put('/availability/:id',updateRoomAvailability)

module.exports=router