const db= require('../util/database');
exports.likeUsers=(req,res,next)=> {
    db.execute('Select * From sfu').then(rows =>{
        res.render('../view/like.ejs',{data: rows[0]});
    }).catch(err=>{
        console.log(err);
    });
    
};

exports.unlikeUsers=(req,res,next)=> {
    db.execute('Select * From ubc').then(rows =>{
        res.render('../view/unlike.ejs',{data: rows[0]});
    }).catch(err=>{
        console.log(err);
    });
    
};
