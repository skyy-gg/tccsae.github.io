const express = require('express');
const path = require('path');
const pool = require('./db');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public'), {extensions: ['html']}));

app.listen(PORT, () => {
  console.log(`Servidor iniciado em ${PORT}`);
});