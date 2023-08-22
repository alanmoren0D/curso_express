const express=require('express');
const routerApi=require('./routes');

const app=express();
const port=3000;

app.get('/',(req,res)=>{
  res.send("home del servidor de express");
});

app.get('/nueva-ruta',(req,res)=>{
  res.send("ruta nueva");
});

routerApi(app);

app.listen(port,()=>{
  console.log("escuchando a traves de puerto "+port);
});
