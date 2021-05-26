const express = require('express');
const HttpError = require('../models/http-error');
const placesControllers = require('../controllers/places-controller');

const router = express.Router();

router.get('/:placeId', placesControllers.getPlaceById);
router.get('/user/:userId', placesControllers.getPlaceByUserId);
router.post('/', placesControllers.createNewPlace);

module.exports = router;