const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(cors());
app.use(express.json())
app.use('/', routes);

app.listen(3031, () => {
  console.log('server started on port 3031');
});
