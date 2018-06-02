const express = require('express');
const hbs = require('hbs');
const port = process.env.PORT || 5000;
var app = express();
hbs.registerPartials(__dirname+'/views/partials');
hbs.registerHelper('getCurrentYear',()=>{
    return new Date().getFullYear();
});
app.set('view engine','hbs');

// app.use(function(req, res, next) {
//     res.render('maintanance.hbs',{
//         pageTitle: 'At work'
//     })
    
//   });
app.use(express.static(__dirname+'/public'));

app.get('/',(req,res)=>{
    res.render('home.hbs',{
        pageTitle: 'Home'
    })
});

app.get('/about',(req,res)=>{
    res.render('about.hbs',{
        pageTitle: 'About'
    });
});

app.get('/profile',(req,res)=>{
    res.render('profile.hbs',{
        pageTitle: 'profile'
    });
});

app.listen(port,()=>{
    console.log(`Server started on port ${port}`);
});