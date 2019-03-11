require("dotenv").config();

const express = require("express");
const morgan = require("morgan");

const app = express();

const port = process.env.PORT || 3000;

app.use(process.env.NODE_ENV === "dev" ?
  morgan("dev") :
  morgan("tiny"));

app.get('/', (req, res) => {
  return res.json({
    message: 'ok'
  });
});

app.use(require('./middlewares/cors'))

app.listen(3000, () => {
  console.log(`Server is running on port ${port}`);
});
