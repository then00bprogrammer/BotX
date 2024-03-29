const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const getCommands=require('./routes/bot-commands');
const cors = require('cors');
const port=process.env.PORT || 5000;

const corsOptions = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  allowedHeaders: ["Access-Control-Allow-Origin", "Origin", "X-Requested-With", "Content-Type", "Accept", "Authorization"],
  credentials: true
};

const app = express();

// app.options('*', cors(corsOptions));
app.use(cors(corsOptions));



const MONGODB_URI =
  `mongodb+srv://nikhil03:hellskitchen03@cluster0.noxzw.mongodb.net/bots?retryWrites=true&w=majority`;




// app.use(cors())

// for parsing application/json
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json()); 

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 
//form-urlencoded
app.use(getCommands);

app.use(express.json());

mongoose
  .connect(MONGODB_URI)
  .then(result => {
    console.log('connected')
    console.log(port);
    app.listen(port); 
  })
  .catch(err => {
    console.log(err);
  });