const express = require('express');

const placesRoutes = require('./routes/places-routes');
const usersRoutes = require('./routes/users-routes');
const app = express();


app.use(express.json());


app.use('/api/places',placesRoutes);
app.use('/api/users',usersRoutes);

/*
If you add 4 parameters to middleware function, then express treats it as a special (error handling) middleware function
This function will only be executed on requests that have an error attached to it (thrown)
It will execute only when some middleware before it yields an error
*/
app.use((error, req, res, next)=> {
    //Check if a response has already been sent
    if(res.headerSent){
        return next(error);
    }
    res.status(error.code || 500);
    res.json({
        message: error.message || 'Unknown error occured!'
    });
     
})
app.listen(3000);


