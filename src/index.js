const app = require('./server');

const port = process.env.PORT || 3000;

<<<<<<< HEAD
app.use(process.env.NODE_ENV === "dev" ?
  morgan("dev") :
  morgan("tiny"));

app.get('/', (req, res) => {
  return res.json({
    message: 'ok'
  });
});

app.use(require('./middlewares/cors'))

=======
>>>>>>> feature/login
app.listen(3000, () => {
  console.log(`Server is running on port ${port}`);
});
