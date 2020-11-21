import express = require('express');
const app = express ()



//import get from './get';
import get from './get-odecet';


app.use (express.json())

app.get('/soucet', get);

app.get('/odecet', get);

app.listen(3000, () => console.log ('Server Started'))