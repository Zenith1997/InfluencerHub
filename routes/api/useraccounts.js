const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const UserAccount = require('../../models/UserAccount');

router.get('/',(req,res) => {
    UserAccount.find()
        .sort({date:-1})
        .then(items => res.json(items))
});

router.post('/', async (req, res) => {
	console.log(req.body)
	try {
		const newPassword = await bcrypt.hash(req.body.password, 10);
        console.log(newPassword);
		await UserAccount.create({
			firstName: req.body.fname,
            lastName: req.body.lname,
			email: req.body.email,
            phoneNo: req.body.contactNo,
            type:'admin',
            isActive:'true',
			password: newPassword,
		})
		res.json({ status: 'ok' })
	} catch (err) {
		res.json({ status: 'error', error: 'Duplicate email' });
	}
})

module.exports = router;