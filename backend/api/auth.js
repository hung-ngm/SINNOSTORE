const express = require('express');
const AuthService = require('../services/auth');

const router = express.Router();

router.post('/signin', async (req, res) => {
    try {
        const user = await AuthService.signIn(req.body.username, req.body.password);
        res.json(user.toJson())
    } catch (err) {
        res.status(401).send(err.message)
    }
});

router.post('/signup', async (req, res) => {
    try {
        const newUser = await AuthService.signUp(req.body.username, req.body.password)
        res.json(newUser)
    }
    catch (err) {
        res.status(401).send(err.message)
    }
    
})

module.exports = router