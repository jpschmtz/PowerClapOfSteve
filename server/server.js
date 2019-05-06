// // Loading evnironmental variables here
// if (process.env.NODE_ENV !== 'production') {
// 	console.log('loading dev environments')
// 	require('dotenv').config()
// }
// require('dotenv').config()

// var axios = require("axios");
// var cheerio = require("cheerio");
// var db = require("./models");
// const express = require('express')
// const bodyParser = require('body-parser')
// const morgan = require('morgan')
// const session = require('express-session')
// const MongoStore = require('connect-mongo')(session)
// const dbConnection = require('./db') // loads our connection to the mongo database
// const passport = require('./passport')
// const app = express()
// const PORT = process.env.PORT || 8080
// var results = [];
// mongoose.connect("mongodb://localhost/PowerClapOfSteve", { useNewUrlParser: true });


// // ===== Middleware ====
// app.use(morgan('dev'))
// app.use(
// 	bodyParser.urlencoded({
// 		extended: false
// 	})
// )
// app.use(bodyParser.json())
// app.use(
// 	session({
// 		secret: process.env.APP_SECRET || 'this is the default passphrase',
// 		store: new MongoStore({ mongooseConnection: dbConnection }),
// 		resave: false,
// 		saveUninitialized: false
// 	})
// )

// // ===== Passport ====
// app.use(passport.initialize())
// app.use(passport.session()) // will call the deserializeUser

// // ===== testing middleware =====
// // app.use(function(req, res, next) {
// // 	console.log('===== passport user =======')
// // 	console.log(req.session)
// // 	console.log(req.user)
// // 	console.log('===== END =======')
// // 	next()
// // })
// // testing
// // app.get(
// // 	'/auth/google/callback',
// // 	(req, res, next) => {
// // 		console.log(`req.user: ${req.user}`)
// // 		console.log('======= /auth/google/callback was called! =====')
// // 		next()
// // 	},
// // 	passport.authenticate('google', { failureRedirect: '/login' }),
// // 	(req, res) => {
// // 		res.redirect('/')
// // 	}
// // )

// // ==== if its production environment!
// if (process.env.NODE_ENV === 'production') {
// 	const path = require('path')
// 	console.log('YOU ARE IN THE PRODUCTION ENV')
// 	app.use('/static', express.static(path.join(__dirname, '../build/static')))
// 	app.get('/', (req, res) => {
// 		res.sendFile(path.join(__dirname, '../build/'))
// 	})
// }

// /* Express app ROUTING */
// app.use('/auth', require('./auth'))

// // A GET route for scraping the TechCrunch website
// app.get("/scrape", function(req, res) {
// 	// First, we grab the body of the html with axios
// 	axios.get("https://techcrunch.com/").then(function(response) {
// 	  // Then, we load that into cheerio and save it to $ for a shorthand selector
// 	  var $ = cheerio.load(response.data);
  
// 	  // Now, we grab every h2 within an article tag, and do the following:
// 	  $("body h2").each(function(i, element) {
// 		// Save an empty result object
// 		var result = {};
  
// 		// Add the text and href of every link, and save them as properties of the result object
// 		result.title = $(this)
// 		  .children("a")
// 		  .text();
// 		result.link = $(this)
// 		  .children("a")
// 		  .attr("href");
  
// 		// Create a new Article using the `result` object built from scraping
// 		db.Article.create(result)
// 		  .then(function(dbArticle) {
// 			// View the added result in the console
// 			console.log(dbArticle);
// 		  })
// 		  .catch(function(err) {
// 			// If an error occurred, log it
// 			console.log(err);
// 		  });
// 	  });
  
// 	  // Send a message to the client
// 	  res.send("Scrape Complete");
// 	});
//   });  

// // ====== Error handler ====
// app.use(function(err, req, res, next) {
// 	console.log('====== ERROR =======')
// 	console.error(err.stack)
// 	res.status(500)
// })

// // ==== Starting Server =====
// app.listen(PORT, () => {
// 	console.log(`App listening on PORT: ${PORT}`)
// })
