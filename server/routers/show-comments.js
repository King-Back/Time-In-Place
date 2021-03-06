const express = require('express');
const Comment = require('./../dbs/Model/comment');

const router = express.Router();

router.post("/allComments", (req, res) => {
    Comment.find({problemId: req.body.id}).sort({'createdAt': -1}).exec(function (err, info) {
        if(!info[0]) {
            res.json({comments: []});
        } else
            res.json({comments: info[0].replyInfos});
    });
});

module.exports = router;