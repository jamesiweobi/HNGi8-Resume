const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
// const PORT =
const myName = 'James Iweobi';

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan('dev'));

app.post('/contact-me', (req, res) => {
  const { name, email, message } = req.body;
  res.status(200).json({
    status: 'success',
    message: `Thank you for reaching out to ${myName}.`,
    data: { name, email, message },
  });
});

app.listen(process.env.PORT || 3000, () =>
  console.log(`Server listening on port: ${PORT}`)
);
