const express = require('express');
const bodyParser = require('body-parser');
const proverbsRoutes = require('./routes/proverbs');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/proverbs', proverbsRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the Afghan Proverbs API!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
