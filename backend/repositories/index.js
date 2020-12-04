//Connect to MongoDB
const mongo = require('mongodb');

let db = {};

const client = new mongo.MongoClient('mongodb://localhost:27017');
client.connect().then((connectedClient) => {
    console.log('Connected to MongoDB!');
    const database = connectedClient.db('sinnostore');
    db.users = database.collection('users');
})

module.exports = db;