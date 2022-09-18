const express = require('express');
const router = express.Router();
const models = require('../db/models')

router.get('/', async(req, res)=>{
    const sports = await models.Sport.findAll({order:[["name","DESC"]]})
    res.json(sports)
})
module.exports = router;
