const express=require('express');
const {faker}=require('@faker-js/faker');

const router=express.Router();

router.get('/',(req, res)=>{
  const {limit, offset}=req.query;
  if(limit && offset)
  {
    res.json({
      limit : limit,
      offset : offset
    })
  }else
  {
    res.send('no existen los parametros');
  }
});

module.exports=router;
