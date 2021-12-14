const express = require('express');
const app = express();
const path = require('path');

// enable cross-origin
const cors = require('cors');
app.use(cors());

app.use(express.static(path.join(__dirname, './client/build')));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.listen(process.env.PORT || 8080);