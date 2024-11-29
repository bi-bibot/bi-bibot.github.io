const express = require('express')
const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
  
  // Define a route to handle incoming requests
  app.get('/', (req, res) => {
    res.send('Hello, Express!');
  });