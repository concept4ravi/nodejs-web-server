const express = require('express');
const hbs = require('hbs');

var app = express();
hbs.registerPartials(__dirname+'/views/partials');

app.set('view engine','hbs');

app.use(function(req, res, next) {
    res.render('maintanance.hbs',{
        pageTitle: 'At work'
    })
    
  });
app.use(express.static(__dirname+'/public'));

app.get('/',(req,res)=>{
    res.render('home.hbs',{
        pageTitle: 'Home',
        currentYear: new Date().getFullYear()
    })
});

app.get('/about',(req,res)=>{
    res.render('about.hbs',{
        pageTitle: 'About',
        currentYear: new Date().getFullYear()
    });
});

app.listen(3000,()=>{
    console.log('Server started on port 3000');
});