const express = require('express');
const router = express.Router();
const firebase = require('firebase');

const config = {
	apiKey: 'AIzaSyB0-S3ozoSx1LDHMc1V4gMy-c1HBVXrq1I',
	authDomain: 'fire-blogz.firebaseapp.com',
	databaseURL: 'https://fire-blogz.firebaseio.com',
	projectId: 'fire-blogz',
	storageBucket: '',
	messagingSenderId: '604471474703',
	appId: '1:604471474703:web:9aeac168e8047527'
};

firebase.initializeApp(config);

router.get('/login', (req, res) => {
	res.render('users/login');
});

router.post('/login', (req, res) => {
	firebase
		.auth()
		.signInWithEmailAndPassword(req.body.email, req.body.password)
		.then((user) => {
			res.redirect('/');
		})
		.catch((error) => {
			let errCode = error.code;
			let errMsg = error.message;
			console.log('>' + errCode + ', ' + errMsg);
			res.redirect('/users/login');
		});
});

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.redirect('/users/login');
});

module.exports = router;
