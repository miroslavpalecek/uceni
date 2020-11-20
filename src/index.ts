import express = require('express');
const app = express ()



import get from './get';


app.use (express.json())

app.get('/soucet', get);

app.get('/prava', get);

app.listen(3000, () => console.log ('Server Started'))