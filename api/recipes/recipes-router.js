const express = require('express');
const Recipes = require('./recipes-model');

const router = express.Router();

router.get('/:recipe_id', async (req, res, next) => {
    try {
        const {recipe_id} = req.params;
        const recipe = await Recipes.getRecipeById(recipe_id);
        res.json(recipe)
    } catch(err) {
        next(err);
    }
});

router.use((err, req, res, next) => { //eslint-disable-line 
    res.status(err.status || 500).json({
        message: err.message || 'Something went wrong with the server'
    });
});

module.exports = router;