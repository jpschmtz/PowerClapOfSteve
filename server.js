var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");
// var request = require("request");
var bodyParser = require("body-parser");

// const flash = require('connect-flash');
const session = require('express-session')
// Our scraping tools
// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server
var axios = require("axios");
var cheerio = require("cheerio");
var passport = require('./server/passport/index');
// Require all models
var db = require("./models");

// Initialize Express
var app = express();

let PORT = process.env.PORT || 8080;

if (process.env.NODE_ENV !== 'production') {
  app.use(express.static("/build"));
}

// app.use(herokuProxy({
//   hostname: 'localhost',
//   port    : 8080,
//   prefix  : 'heroku-api',
//   protocol: 'http'
// }));

// Configure middleware

// Use morgan logger for logging requests
app.use(logger("dev"));
// Parse request body as JSON
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// Sessions
app.use(
	session({
	  secret: 'secret',
	  resave: true,
	  saveUninitialized: true
	})
  );

// Connect to the Mongo DB HEROKU
mongoose.connect("mongodb://Master:Password123@ds155516.mlab.com:55516/heroku_rlf28wdk", { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));;
// Connect to the Mongo DB Locally
// mongoose.connect("mongodb://localhost/PowerClapOfSteve", { useNewUrlParser: true });
var results = [];


// MIDDLEWARE
// Passport 
app.use(passport.initialize());
app.use(passport.session());


// Routes
// Login
app.post(
  '/auth/login',
  function (req, res, next) {
      console.log('routes/user.js, login, req.body: ');
      console.log(req.body)
      next()
  },
  passport.authenticate('local'),
  (req, res) => {
      console.log('logged in', req.user);
      var userInfo = {
          username: req.user.username
      };
      res.send(userInfo);
  }
)
// app.post('/auth/login', (req, res, next) => {
 
//     } console.log(req.body);
//   // passport.authenticate('local', {
//   //   successRedirect: '/dashboard',
//   //   failureRedirect: '/users/login',
//   //   failureFlash: true
//   // })(req, res, next);
// });
// app.get("/", function(req, res) {
//   res.render("index");
// });

// A GET route for scraping the TechCrunch website
app.get("/api/scrape", function(req, res) {
  // db.Article.drop();
  // First, we grab the body of the html with axios
  axios.get("https://techcrunch.com/").then(function(response) {
    // Then, we load that into cheerio and save it to $ for a shorthand selector
    var $ = cheerio.load(response.data);
    // var key = 0;
    var result = {};
    // Now, we grab every h2 within an body tag, and do the following:
    $("body h2").each(function(i, element) {
      // Save an empty result object
        result = {};
      // Add the text and href of every link, and save them as properties of the result object
      result.title = $(this)
        .children("a")
        .text();
      result.title = result.title.replace(/(\r\n|\n|\r|\t)/gm,"");
      result.link = $(this)
        .children("a")
        .attr("href");

        results.push(result);
      // Create a new Article using the `result` object built from scraping

      db.Article.create(result)
        .then(function(dbArticle) {
          // View the added result in the console
          // console.log(result);
          
          // console.log('HERE!!!!!');
        })
        .catch(function(err) {
          // If an error occurred, log it
          console.log(err);
        });
    });

    // Send a message to the client
    // console.log(result);
    res.json(results)
    // .then(db.Article.drop())
    // .then(result = {});
    // res.send("Scrape Complete");
  });
});

// Route for getting all Read Later Articles from the db
app.get("/articles", function(req, res) {
  // Grab every document in the Articles collection
  db.Article.find({})
    .then(function(dbArticle) {
      // If we were able to successfully find Articles, send them back to the client
      res.json(dbArticle);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});

// Routes
// app.use('/', require('./server/routes/index.js'));
// app.use('/users', require('./server/routes/user.js'));
// // Connect flash
// app.use(flash());

// Global variables
// app.use(function(req, res, next) {
//   res.locals.success_msg = req.flash('success_msg');
//   res.locals.error_msg = req.flash('error_msg');
//   res.locals.error = req.flash('error');
//   next();
// });

// // Route for grabbing a specific Article by id, populate it with it's note
// app.get("/articles/:id", function(req, res) {
//   // Using the id passed in the id parameter, prepare a query that finds the matching one in our db...
//   db.Article.findOne({ _id: req.params.id })
//     // ..and populate all of the notes associated with it
//     .populate("note")
//     .then(function(dbArticle) {
//       // If we were able to successfully find an Article with the given id, send it back to the client
//       res.json(dbArticle);
//     })
//     .catch(function(err) {
//       // If an error occurred, send it to the client
//       res.json(err);
//     });
// });

// // Route for saving/updating an Article's associated Note
// app.post("/articles/:id", function(req, res) {
//   // Create a new note and pass the req.body to the entry
//   db.Note.create(req.body)
//     .then(function(dbNote) {
//       // If a Note was created successfully, find one Article with an `_id` equal to `req.params.id`. Update the Article to be associated with the new Note
//       // { new: true } tells the query that we want it to return the updated User -- it returns the original by default
//       // Since our mongoose query returns a promise, we can chain another `.then` which receives the result of the query
//       return db.Article.findOneAndUpdate({ _id: req.params.id }, { note: dbNote._id }, { new: true });
//     })
//     .then(function(dbArticle) {
//       // If we were able to successfully update an Article, send it back to the client
//       res.json(dbArticle);
//     })
//     .catch(function(err) {
//       // If an error occurred, send it to the client
//       res.json(err);
//     });
// });

// Start the server
app.listen(PORT, function() {
  console.log("Node App running on port " + PORT + "!");
});
