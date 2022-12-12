const express = require('express');
// const session = require('express-session');
// const routes = require('./controllers');
const db = require('./config/connection');
// require model
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});

// how do we see the schema in compass/ at all
// need to go over how other models need to look