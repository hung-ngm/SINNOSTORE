const { request } = require("express");

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// const router = require('./api');

const app = express();
app.use(cors());
app.use(bodyParser.json());
// app.use(router);

app.listen(5001, () => {
    console.log('App is running at 5001')
})

