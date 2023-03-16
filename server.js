const express = require('express');
const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
require('./route/user')(app);


app.listen(2000);