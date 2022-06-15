const { getHotels, getHotel, createHotel, updateHotel, deleteHotel, countByType, countByCity, getHotelRooms } = require('../controllers/hotel');
const { verifyAdmin } = require('../utils/verifyUsers');


const router =require('express').Router();

router.get('/getallhotel',getHotels)
router.get('/countByCity',countByCity)
router.get('/countByType',countByType)
router.get('/gethotel/:id',getHotel)
router.post('/createhotel',verifyAdmin,createHotel)
router.put('/updatehotel/:id',verifyAdmin,updateHotel)
router.delete('/deletehotel/:id',verifyAdmin,deleteHotel)
router.get('/gethotelRoom/:id',getHotelRooms)

module.exports=router