const express = require('express');
const app = express();
const port = 3000;

// Set up middleware and static files
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Set the templating engine to EJS
app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/upload', (req, res) => {
  res.render('upload');
});

app.post('/upload', (req, res) => {
  // Process and store the uploaded question data
  const question = req.body.question;
  const options = req.body.options.split(',');

  // Save the question data to the database or file

  res.redirect('/');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
