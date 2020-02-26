const model = require('../model');
const user =  model.user

const getId = (req, res) => {
    let newId = user.getNewId();
    res.send({status:200, new_id: newId})
}

const addCharacter = (req, res) => {
    let id = req.body.id
    let character = req.body.character
    let newChars = user.addCharacter(id, character);
    if (newChars) {
        res.send({status: 200, result: newChars })
    } else {
        res.send({status: 400, result: "Invalid Input"})
    }
}

const setPlot = (req, res) => {
    let id = req.body.id
    let plot = req.body.plot
    let newPlot = user.setPlot(id, plot);
    if (newPlot) {
        res.send({status: 200, result: newPlot})
    } else {
        res.send({status: 400, result: "Invalid Input"})
    }
}

const getUser = (req, res) => {
    let User = user.getUser(req.params.id);
    if (User) {
        res.send({status: 200, result: User})
    } else {
        res.send({status: 404, result: "User does not exist"})
    }
}

module.exports = {
    addCharacter,
    getId,
    setPlot,
    getUser
}