const express = require("express");
const app = express();
const port = 3000;
const customers = require('./routes/customers');

app.use('/test_json/customers', customers)



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
