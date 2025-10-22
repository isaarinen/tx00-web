import express from "express";
const app = express();

import { getRoot } from './controllers.js'; // getRoot is imported

app.get('/', getRoot); // getRoot is used as a callback

const port = 3001;
// Start the server
app.listen(port, () => {
  console.log(`The server is running at http://localhost:${port}`);
});