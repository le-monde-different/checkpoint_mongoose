const express = require("express");
const mongoose = require ("mongoose");
const app = express();

app.get('/bonjour', (req,res)=>{
    res.send('ahla')
})
mongoose.connect('mongodb+srv://marouen:marouen@cluster0.gi3tnma.mongodb.net/?retryWrites=true&w=majority',(err,done)=>{
if (err){
    console.log(err)
}
if (done){
    console.log('base de donnée Sussfuly')
}
});

app.listen(5000,() => console.log ("serveur en tres bien en marche"));

