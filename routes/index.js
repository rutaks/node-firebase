const express = require('express');
const router = express.Router();
const firebase = require('firebase');

/* GET home page. */
router.get('/', (req, res, next) => {
	if (!firebase.auth().currentUser) {
		res.redirect('/users/login');
	}
	res.render('index', { title: 'Express' });
});

module.exports = router;
