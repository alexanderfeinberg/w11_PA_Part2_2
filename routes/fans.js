const express = require('express');
const router = express.Router();

const models = require('../db/models')

router.get('/:fanId/drafts', async(req, res, next)=>{
    const fan = await models.Fan.findByPk(req.params.fanId)
    console.log(fan)
    const players = await fan.getPlayers()
    console.log(players)

    res.json(players)
})


router.delete('/:id' , async(req, res, next)=>{
    const fan = await models.Fan.findByPk(req.params.id)
    await fan.destroy()

    res.json({
        message:"Successfully deleted."
    })
})

module.exports = router;
