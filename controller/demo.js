const { citizen_detail } = require('../models/citizen')

//first API
const fullname = async(req, res) => {
    console.log("Hasham uddin");
    res.send("Full name is Hasham Uddin")
}

//get all citizens
const allcitizen = async(req, res) => {
    try {
        let allcit = await citizen_detail.find({})
        res.send(allcit)
    } catch (e) {
        res.send(e)
    }
}

//insert a citizen
const addcitizen = async(req, res) => {
    try {
        const addcit = new citizen_detail({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            age: req.body.age
        })
        let insertcit = await addcit.save();
        res.send("add successfully")
    } catch (e) {
        res.send(e)
        console.log(e)
    }
}

//delete citizen
const deletecitizen = async(req, res) => {
    try {
        const getstdspe = await citizen_detail.findByIdAndDelete(req.body.id)
        res.send("Delete Successfully")
    } catch (e) {
        console.log(e)
        res.send(e)
    }
}

//update a citizen
const updcit = async(req, res) => {
    try {
        const _id = req.query.id;
        const getstdspe = await citizen_detail.findByIdAndUpdate(_id, req.body, {
            new: true //new updated value usi waqt mil jae uskay liye kia hay
        })
        res.send(getstdspe)
    } catch (e) {
        console.log(e)
        res.send(e)
    }
}

module.exports = { fullname, updcit, deletecitizen, allcitizen, addcitizen }