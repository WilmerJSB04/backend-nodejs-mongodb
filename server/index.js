require("dotenv").config();

const dbConnectNoSql = require("../config");
const express = require('express');
const cors = require("cors");
const logger  = require('morgan');

const bodyParser = require('body-parser');
const port = process.env.PORT ?? 3000;
const app = express();

app.use(logger('dev'))
app.use(cors());
app.use(express.json());

app.use("/api", require("../routes/routes.js"));

app.use( bodyParser.urlencoded({ extended: true }) );
app.use( bodyParser.json() );

app.listen(port, () => {
  console.log(`Server running on PORT: ${port}`);
  
});

dbConnectNoSql();

