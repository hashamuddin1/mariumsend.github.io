const express = require('express');
const router = express.Router();
const { fullname, updcit, deletecitizen, allcitizen, addcitizen } = require('../controller/demo')

//CRUD APIs
//C CREATE
//R READ
//U UPDATE
//D DELETE
router.get("/api/fullname", fullname)
    //get all citizen
router.get("/api/allcitizen", allcitizen)
    //insert a citizen
router.post("/api/insertcitizen", addcitizen)
    //delete a citizen
router.delete("/api/delcit", deletecitizen)
    //update a citizen
router.put("/api/updcit", updcit)

module.exports = router