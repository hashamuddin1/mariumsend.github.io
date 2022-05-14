const express = require('express')
const router = express.Router()
const { firstapi, secondapi } = require('../controller/controllers')

router.get('/api/firstapi', firstapi)
router.get('/api/secondapi', secondapi)

module.exports = router