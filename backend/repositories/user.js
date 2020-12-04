//Query databases
const db = require('./index');
const User = require('../models/user');

const findByUsername = async (username) => {
    const dbResult = await db.users.findOne({
        username: username
    });
    if(!dbResult) {
        return null
    }
    const user = new User(dbResult.username, dbResult.salt, dbResult.hash);
    return user

}

const save = async (user) => {
    const dbResult =  await db.users.findOneAndUpdate(
        {
            username: user.username
        },
        {
            $set: {
                displayName: user.displayName,
                photoUrl: user.photoUrl,
                salt: user.salt,
                hash: user.hash
            }
        },
        {
            upsert: true,
            returnOriginal: false
        }
    )
    const savedUser = new User(dbResult.value.username);
    return savedUser
}


module.exports = { findByUsername, save }