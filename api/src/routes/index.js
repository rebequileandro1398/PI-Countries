const { Router } = require('express');
const countriesRoute = require('./Countries')
const activitiesRoute = require('./Activities')
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

//middlewares
router.use('/countries', countriesRoute);
router.use('/activity', activitiesRoute);



module.exports = router;
