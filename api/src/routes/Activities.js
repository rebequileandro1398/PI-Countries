const { Router } = require('express');
const {Country, Activity } = require('../db.js');

const router = Router();


router.get('/', async (req, res, next) => {
    try {
        const getActivity = await Activity.findAll({include: Country})
        res.send(getActivity);
    } catch (err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const{name, difficulty, duration, season, country} = req.body;
        let create = await Activity.create({//create done, findOrCreate crash
            name,
            difficulty,
            duration,
            season
        })
        let searchCountry = await Country.findAll({//busco el pais en mi db
            where: {name: country}
        })
        create.addCountry(searchCountry)
        res.send('done')
        
    } catch (err) {
        next(err)
    }
})


module.exports = router;