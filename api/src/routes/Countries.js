const { Router } = require('express');
const axios = require('axios')
const {Country, Activity} = require('../db.js');
const {Op} = require('sequelize')

const router = Router();

const getData = async () => {
    const getcountries = await axios.get("https://restcountries.com/v3/all");
    getcountries.data.map(async (c) => {
      try {
        await Country.findOrCreate({
          where: {
            id: c.cca3,
            name: c.name.common,
            flag: c.flags[0],
            continents: c.continents[0],
            capital: c.capital?.length ? c.capital[0] : "not available",
            subregion: c.subregion ? c.subregion : "not available",
            area: c.area,
            population: c.population,
          },
        });
      } catch (error) {
        console.log(error);
      }
    });
}
getData();
router.get('/', async (req, res, next) => {
    try {
        const name = req.query.name; 
        let search;
        if(name) {
            search = await Country.findAll({
            include: Activity,
            where: {name: {[Op.iLike]: "%" + name + "%"}},
            order: [['name', 'ASC']]
          });

        } else {
           search = await Country.findAll({include: Activity, order:[['name', 'ASC']]})
        }
        return res.send(search);

    } catch (err) {
        next(err)
    }
})



router.get('/:id', async (req, res, next) => {
    const id = req.params.id
    try {
        if(typeof id === 'string' && id.length === 3) {
            let countryId = await Country.findAll({
                include: Activity,
              });
            let countriesId = await countryId.filter(c =>
                 c.id.toLowerCase().includes(id.toLowerCase()))
            if(countriesId) return res.send(countriesId)
        }
    } catch (error) {
        next(error)
    }
})

module.exports = router;