const { orders,verify } = require('../controllers/payment');

const router =require('express').Router();

router.post('/orders',orders)
router.post('/verify',verify)

module.exports=router