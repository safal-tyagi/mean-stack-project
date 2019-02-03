const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const Post = require('./models/post');

// database connection
mongoose.connect('mongodb+srv://sakty:ucrvhutWWWn9C20y@cluster0-tnqix.mongodb.net/mean-stack?retryWrites=true')
.then(() => {
  console.log('Connected to database');
})
.catch(() => {
  console.log('Connection failed')
});

const app = express();
app.use(bodyParser.json());

// middleware
app.use((req, res, next) => {
  console.log('Middleware');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers',
   'Origin, X-Requested-With, Accept, Content-Type');
  res.setHeader('Access-Control-Allow-Methods',
   'GET, POST, PATCH, DELETE, OPTIONS');
  next(); // redirect to next layer
});

// post
app.post('/api/posts', (req, res, next) => {
  //const post = req.body;
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  console.log(post);
  post.save();
  res.status(201).json({
    message: "Post added"
  });
});

// use
app.use('/api/posts', (req, res, next) => {
  // TEST DATA: not FORM DB-----------------
  // const posts = [
  //   {
  //     id: 'lafjdfafj',
  //     title: 'Post One',
  //     content: 'Content 01'
  //   },
  //   {
  //     id: 'ajfhasdjhf',
  //     title: 'Post Two',
  //     content: 'Content 02'
  //   }
  // ];
  // ---------------------------------------

  // from DB
  Post.find()
  .then(posts => {
    console.log(posts);
    res.status(200).json({
      message: 'Post fetched!',
      posts: posts
    });
  });
});

module.exports = app;
