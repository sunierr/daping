const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the React app build folder
app.use(express.static(path.join(__dirname, 'build')));



// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/build/index.html'));
});

//const port = process.env.PORT || 3000;
const port = 3000;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});