const express=require('express');
const {faker}=require('@faker-js/faker');

const router=express.Router();

router.get('/',(req,res)=>{
  const {size}=req.query;
  const limit=size || 10;
  const products=[];

  for(i=0;i<limit; i++)
  {
    products.push({
      name:faker.commerce.productName(),
      price:parseInt(faker.commerce.price(),10),
      image:faker.image.imageUrl()
    });
  }

  res.json(products);
});

router.get('/filter', (req, res)=>{
  const id=req.params.id;
  res.json({
    id:id,
    name:"producto 1",
    price: 3000
  });
});

router.get('/:id', (req, res)=>{
  const id=req.params.id;
  res.json({
    id:id,
    name:"producto 1",
    price: 3000
  });
});

module.exports=router;
