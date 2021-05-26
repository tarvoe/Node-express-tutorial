const express = require('express');

const router = express.Router();

const DUMMY_USERS= [
    {
        id: '1',
        firstName: 'Tarvo',
        lastName: 'Erimäe',
        address: 'Tallinn'
    },
    {
        id: '2',
        firstName: 'Laura Liis',
        lastName: 'Metsvaht',
        address: 'Tartu'
    }
]

router.get('/:userId',(req, res, next) => {
    const userId = req.params.userId;
    const user = DUMMY_USERS.find(u => {
        return u.id === userId;
    })
    res.json({
        user
    });
});


module.exports = router;