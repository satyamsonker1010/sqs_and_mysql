const { createModelsCategoryController } = require('./model-category.controller');

const router = require('express').Router();

router.post('/create' , createModelsCategoryController);

module.exports = router;