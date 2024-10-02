const express = require('express');

const router = express.Router();

router.get('/:id', (req, res, next) => {
    try{

    } catch(err){
        
    }
});

router.use((err, req, res, next) => { 
    res.status(err.status || 500).json({
        message: err.message || 'Something went wrong with the server'
    });
})

module.exports = router;