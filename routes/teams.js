const express = require('express');
const router = express.Router();

const models = require('../db/models');

router.post('/:id/players', async(req,res)=>{
    req.body['currentTeamId'] = Number(req.params.id)
    const player = await models.Player.create(req.body)

    res.json(player)

})

router.get('/:id', async(req, res)=>{
    const team = await models.Team.findOne({
        where:{
            id:req.params.id,
        },
            include:[{ model: models.Sport}, {model:models.Player, as:"TeamRoster"}]

    })


    res.json(team)
})

router.get('/', async(req, res)=>{
    const teams = await models.Team.findAll({order:[['homeCity',"ASC"],["name","DESC"]]})

    res.json(teams)
})

module.exports = router;
