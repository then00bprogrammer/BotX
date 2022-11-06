const express = require('express');
const router = express.Router();
const { body } = require('express-validator');

const commandConntroller = require('../controllers/commandController');

router.get('/',(req,res)=>{
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>Hello World</h1>
    </body>
    </html>
    `)
})

router.post('/save-bot',commandConntroller.saveBot)

router.get('/get-bot',commandConntroller.getAllServers)

module.exports=router;

// [
//     body('server_name').
//     not().
//     isEmpty()
//     .withMessage("server name cannot be empty"),
//     body('bot_name').
//     not().
//     isEmpty()
//     .withMessage("bot name cannot be empty"),
//     body('desc').
//     not().
//     isEmpty().
//     withMessage("desc cannot be empty")
// ]