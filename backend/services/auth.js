const UserRepo = require('../repositories/user');
const User = require('../models/user');

const signUp = async (username, password) => {
    const existedUser = await UserRepo.findByUsername(username);
    console.log(existedUser)
    if (existedUser) {
        throw new Error('User is existed')
    }
    const user = new User(username);
    user.generatePassword(password);
    const savedUser = await UserRepo.save(user);
    return savedUser
}

const signIn = async (username, password) => {
    const existedUser = await UserRepo.findByUsername(username);
    if (!existedUser) {
        throw new Error('Username is not existed!');
    }
    if (!existedUser.verifyPassword(password)) {
        throw new Error('Password not matched!');
    }
    existedUser.generateJWT();
    return existedUser;
}

module.exports = { signUp, signIn }