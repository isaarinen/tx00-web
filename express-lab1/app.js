import express from 'express';
const app = express();
const port = 3001;

// Callback function for the root endpoint
const handleRootRequest = (req, res) => {
  res.send('Hello World!');
};



// Registering routes with the callback functions
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Starting the server and listening on the specified port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});