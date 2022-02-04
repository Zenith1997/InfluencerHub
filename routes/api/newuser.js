const express = require('express');
const router = express.Router();

const Comments = require('../../models/NewUsers');

router.get('/',(req,res) => {
    Comments.find()
        .sort({date:-1})
        .then(items => res.json(items))
});

module.exports = router;