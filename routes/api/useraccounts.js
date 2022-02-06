const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
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

router.post('/login', async (req, res) => {
	const user = await UserAccount.findOne({
		email: req.body.email,
		userName: req.body.firstName
	})

	if (!user) {
		return { status: 'error', error: 'Invalid login' }
	}

	const isPasswordValid = await bcrypt.compare(
		req.body.password,
		user.password
	);

	if (isPasswordValid) {
		const token = jwt.sign(
			{
				name: user.firstName,
				email: user.email,
			},
			'secret123'
		)

		return res.json({ status: 'ok', user: token })
	} else {
		return res.json({ status: 'error', user: false })
	}
})

module.exports = router;