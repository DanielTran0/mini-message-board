var express = require('express');
var router = express.Router();

const messages = [
	{
		text: 'Hi there!',
		user: 'Amanda',
		added: new Date().toDateString(),
	},
	{
		text: 'Hello World!',
		user: 'Charles',
		added: new Date().toDateString(),
	},
];

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', { title: 'Mini Message Board', messages });
});

router.get('/new', (req, res, next) => {
	res.render('form', { title: 'Add Message' });
});

router.post('/new', (req, res, next) => {
	const { user, text } = req.body;
	messages.push({ text: text, user: user, added: new Date().toDateString() });
	res.redirect('/');
});

module.exports = router;
