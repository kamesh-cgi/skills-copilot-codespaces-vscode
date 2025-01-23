//Create web server
const express = require('express');
const app = express();
const port = 3000;

//Use the comments.js file
app.use('/comments', require('./comments.js'));

//Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});