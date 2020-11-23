import express = require('express');
const app = express ()



import getSoucet from './get-soucet';
import get from './get-rozdil';


app.use (express.json())

app.get('/soucet', getSoucet);

app.get('/rozdil', get);

app.listen(3000, () => console.log ('Server Started'))