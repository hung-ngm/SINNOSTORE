const { request } = require("express");

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./api');

require('./repositories');  

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(router);

app.listen(5051, () => {
    console.log('App is running at 5051')
})

