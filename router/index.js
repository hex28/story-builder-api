const express = require('express');
const router = express.Router();
const controller = require('../controller');

router.get('/get/id', controller.user.getId)

router.post('/add/character', controller.user.addCharacter);

router.post('/set/plot', controller.user.setPlot);

router.get('/get/user/:id', controller.user.getUser);

router.get('/get/story/:id', controller.stories.getStory);

router.get('/', (req, res) => {
    res.send("")
})

module.exports = router;