require("dotenv").config();

const app = require('./app/server');
const port = process.env.PORT || 3000;

const db = require('./database/config');

db.then(() => {
  console.log('Database connected');
  app.listen(3000, () => {
    console.log(`Server is running on port ${port}`);
  });
})
