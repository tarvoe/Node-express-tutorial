const { request } = require('express');
const HttpError = require('../models/http-error');
const { v4: uuidv4 } = require('uuid');

const DUMMY_PLACES = [
    {
        id: '1',
        title: 'Empire state building',
        description: 'Cool',
        address: 'Tallinn',
        creator: 'u1'
    },
    {
        id: '2',
        title: 'Eifel tower',
        description: 'Cooler',
        address: 'Paris',
        creator: 'u2'
    }
]

const getPlaceById = (req, res, next) => {
    const placeId = req.params.placeId;
    const place = DUMMY_PLACES.find(p => {
        return p.id === placeId;
    })

    if(!place) {
        throw new HttpError('No place for id', 404);
    }
 
    res.json({
        place
    }); 
};

const getPlaceByUserId = (req, res, next) => {
    const userId = req.params.userId;
    const place = DUMMY_PLACES.find(p => {
        return p.creator === userId;
    })
    if(!place) {
        return next(new HttpError('No place for user id', 404));
    }

    res.json({
        place
    });
};

const createNewPlace = (req, res, next) => {
    const {title, description, address, creator} = req.body;
    const createdPlace = {
        id: uuidv4(), 
        title,
        description,
        address,
        creator
    };

    DUMMY_PLACES.push(createdPlace);
    res.status(201).json({place: createdPlace});
};


exports.getPlaceById = getPlaceById;
exports.getPlaceByUserId = getPlaceByUserId;
exports.createNewPlace = createNewPlace;
