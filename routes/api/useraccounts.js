const express = require('express');
const router = express.Router();

const UserAccount = require('../../models/UserAccount');

router.get('/',(req,res) => {
    UserAccount.find()
        .sort({date:-1})
        .then(items => res.json(items))
});

module.exports = router;