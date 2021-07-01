const Orders = require('../models/Orders');
const express =  require('express');

let router = express.Router();

//Get All
router.get('/',(req,res,next)=>{

    Orders.find((err,orders)=>{
        if(err){
            return next(err);
        }else{
            res.json(orders);
        }
    });

});

//Get By ID
router.get('/:id',(req,res,next)=>{

    Orders.findById(req.params.id,(err,post)=>{
        if(err){
            return next(err);
        }else{
            res.json(post);
        }
    });

});

// Create Post
router.post('/',(req,res,next)=>{

    Orders.create(req.body,(err,post)=>{
        if(err){
            return next(err);
        }else{
            res.json(post);
        }
    });

});

// Update Post
router.put('/:id',(req,res,next)=>{
    console.log(req.body)
    Orders.findByIdAndUpdate(req.params.id,req.body,(err,post)=>{
        if(err){
            return next(err);
        }else{
            res.json(post);
        }
    });

});

// Delete Post
router.delete('/:id',(req,res,next)=>{
    Orders.findByIdAndRemove(req.params.id,req.body,(err,post)=>{
        if(err){
            return next(err);
        }else{
            res.json(post);
        }
    });

});

module.exports = router;