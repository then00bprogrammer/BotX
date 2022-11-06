const bot = require('../models/bot');
const { validationResult } = require('express-validator');

exports.saveBot=async (req,res,next)=>{
    // console.log(req.body)
    
    // const errors =validationResult(req);

    // if(errors){
    //     return res.send({"error":errors[0]});
    // }
    
    try {
        const botDetails=req.body;
        const botName=botDetails.bot_name;
        const serverName=botDetails.server_name;
        const commands=botDetails.command;
        const descript=botDetails.desc;

        if(!botName || !serverName || commands.length!==descript.length) throw new Error("fields cant be empty")
    
        let newBot=await bot.findOne({name:serverName});
        if(!newBot){
            newBot=new bot({name:serverName,bots:[{bot_name:botName,command:commands,desc:descript}]});
            newBot.save()
            .then(()=>{
                res.send(newBot);
            })
        }
        else{
            const previousBots=newBot.bots;
            previousBots.push({bot_name:botName,command:commands,desc:descript});
            newBot.bots=previousBots;
            newBot.save()
            .then(()=>{
                res.send(newBot);
            })
        }  
        console.log('success')
    } catch (error) {
        return res.send({"error":error});
    }

}

exports.getAllServers= async (req,res,next)=>{
    const response=await bot.find();
    console.log(response)
    res.send(JSON.stringify(response))
}