const express = require('express');
const router = express.Router();
const { fullname, deletecitizen, allcitizen, addcitizen } = require('../controller/demo')

router.get("/api/fullname", fullname)
    //get all citizen
router.get("/api/allcitizen", allcitizen)
    //insert a citizen
router.post("/api/insertcitizen", addcitizen)
    //delete a citizen
router.delete("/api/delcit", deletecitizen)

module.exports = router