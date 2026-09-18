const express = require('express');
const app = express();

//to set ejs templating engine
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:true}));

app.get('/', (req,res) =>{
    res.render('index');
});

//set port number
app.listen(9000);