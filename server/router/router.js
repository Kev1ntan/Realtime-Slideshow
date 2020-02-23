const router = require('express').Router()
const controller = require('../controller/controller')
router.get('/',controller.slide)
router.patch('/',controller.updateCurrent)


module.exports = router