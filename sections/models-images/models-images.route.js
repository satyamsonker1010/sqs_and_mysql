const { modelImagesCreateController, modelImagesUpdateController } = require('./models-images.controller');

const router = require('express').Router();

router.post("/create", modelImagesCreateController);
router.put("/update", modelImagesUpdateController);

module.exports = router;