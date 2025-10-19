const express = require('express');
const UserModel = require('../models/user');
const router = express.Router();

router.post('/users', async (req, res) => {
    try {
        const { name, image, score } = req.body;
        const newUser = await UserModel.create({ name, image, score });
        res.status(201).json(newUser);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.put('/users/:id/score', async (req, res) => {
    try {
        const { id } = req.params;
        const { score } = req.body;
        const updatedUser = await UserModel.updateScore(id, score);
        if (updatedUser) {
            res.status(200).json(updatedUser);
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/users/top', async (req, res) => {
    try {
        const top = parseInt(req.query.n) || 10;
        const topUsers = await UserModel.getTop(top);
        res.status(200).json(topUsers);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/users/rankings', async (req, res) => {
    try {
        const rankings = await UserModel.getAllWithRank();
        res.status(200).json(rankings);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/users/:id/neighbors', async (req, res) => {
    try {
        const { id } = req.params;
        const m = req.query.m;
        const neighbors = parseInt(m, 10) || 5;
        const result = await UserModel.getUserWithNeighbors(id, neighbors);
        if (result.me) {
            res.status(200).json(result);
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;