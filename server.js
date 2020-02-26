const express = require('express');
const path = require('path');
const router = require( './router');

const app = express();

const port = process.env.PORT || 8080;

app.use( '/', router);

app.listen( port, () => {
  console.info( "Server app started on port " + port )
} )
