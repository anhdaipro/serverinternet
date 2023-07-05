var express=require('express')
var router=express.Router()
const populationcontroller=require('../controllers/population')
router.get('/country',populationcontroller.lCountry),
router.get('/result',populationcontroller.lResult),
router.get('/maxvalue',populationcontroller.maxValue),
module.exports=router