const model = require('../model');
const user =  model.user
const stories = model.stories

const getStory = (req, res) => {
    let id = req.params.id;
    let story = stories.getStoryPlot(user.getUser(id))
    if (story !== undefined) {
        res.send({status: 200, result: {id: id, ...story}})
    }
}


module.exports = {
    getStory
}