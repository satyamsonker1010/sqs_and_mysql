const { modelsCreateController } = require('./models.controller');

const router = require('express').Router();

router.post("/create" , modelsCreateController);

module.exports = router;