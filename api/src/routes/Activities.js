const { Router } = require('express');
const axios = require('axios')
const {conn, Country, Activity } = require('../db.js');
const {Op} = require('sequelize')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();
router.post('/', (req, res, next) => {
    res.send('post de countries') 
})


module.exports = router;