const { createCategoryController } = require('./category.controller');

const router = require('express').Router();

router.post('/create' , createCategoryController);

module.exports= router;