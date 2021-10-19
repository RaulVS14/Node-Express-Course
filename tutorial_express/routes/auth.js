const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
    const {name} = req.body;
    if (name) {
        return res.status(200).json({success: true, data: `Welcome ${name}`});
    }
    return  res.status(401).json({success:false, data: 'Please provide credentials'})
});

module.exports = router;