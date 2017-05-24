const Problem = require('./../dbs/Model/problem');

exports.getPublishProblems= function (req, res) {
    Problem.find({username:`${req.params.username}`}).sort({'createdAt': -1}).exec(function (err, info) {
        if (err) return res.status(500).json({error: err.message});
        res.json(info);
    });
};