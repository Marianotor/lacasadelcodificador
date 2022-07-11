const express = require('express')
const {Router} = express;
const router = Router();


router.get('/', (req,res)=>{
//    products.create(obje);
    res.send('get indexRoute ok');
});

module.exports=router;