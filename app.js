const express = require('express');

const path = require('path')
const app = express();

const db= require('./util/database');

const bodyParser =require('body-parser');

app.use(express.static(path.join(__dirname,'public')));

app.use(bodyParser.urlencoded({extended:false}));

app.set('view engine','ejs');
app.set('views','view');

const likeroute= require('./routes/like.js');
const unlikerout= require('./routes/unlike.js');


app.get('/',(req,res,next)=>{
    res.status(200).render('main',{pageTitle: 'Main Page' });
    
})
app.post('/',(req,res,next)=>{
    if(req.body.university=='SFU')
    {
        db.execute('Insert Into sfu(firstname,lastname,description) values (?,?,?)',
        [req.body.fname,req.body.lname,req.body.description])
        .then(()=>{
            res.redirect('/like');
        })
        .catch(err=>{
            console.log(err);
        });
    }
    else if(req.body.university=='UBC')
    {
        db.execute('Insert Into ubc(firstname,lastname,description) values (?,?,?)',
        [req.body.fname,req.body.lname,req.body.description])
        .then(()=>{
            res.redirect('/unlike');
        })
        .catch(err=>{
            console.log(err);
        });
    }
})
app.use(likeroute);
app.use(unlikerout);

app.listen(process.env.PORT || 5000);