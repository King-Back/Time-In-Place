const express = require('express');

const router = express.Router();

router.post("/userInfo", (req, res) => {
    res.json({isSuccess: true});
});

module.exports = router;