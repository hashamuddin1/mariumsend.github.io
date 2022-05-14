let firstapi = (req, res) => {
    console.log('You Hit The First Api')
    res.send("You Hit The First Api")
}
let secondapi = (req, res) => {
    try {
        res.send("Ubit is a department")
        console.log("Ubit is a department")
    } catch (e) {
        console.log(e)
        res.send(e)

    }

}

module.exports = { firstapi, secondapi }