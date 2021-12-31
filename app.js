const express=require('express');
const path=require('path');
const app=express();
const port=8000;



app.use('/static' ,express.static('static')); //for serving the static files
app.use(express.urlencoded());

app.set('view-engine','pug');// set the view templete engine
app.set('views',path.join(__dirname, 'views'));

//endpoints
app.get('/',(req,res)=>{
    const params={}
    res.status(200).render('index.pug',params);
})



app.listen(port,()=>{
    console.log(`server run successfully on port ${port}`);
});