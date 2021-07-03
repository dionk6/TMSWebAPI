const ConfirmOrder = require('../models/ConfirmOrder');
const express =  require('express');

let router = express.Router();

//Get All
router.get('/',(req,res,next)=>{

    ConfirmOrder.find((err,ConfirmOrder)=>{
        if(err){
            return next(err);
        }else{
            res.json(contacts);
        }
    });

});

//Get By ID
router.get('/:id',(req,res,next)=>{

    ConfirmOrder.findById(req.params.id,(err,post)=>{
        if(err){
            return next(err);
        }else{
            res.json(post);
        }
    });

});

// Create Post
router.post('/',(req,res,next)=>{

    ConfirmOrder.create(req.body,(err,post)=>{
        if(err){
            return next(err);
        }else{
            res.json(post);
        }
    });

});

// Update Post
router.put('/:id',(req,res,next)=>{
    ConfirmOrder.findByIdAndUpdate(req.params.id,req.body,(err,post)=>{
        if(err){
            return next(err);
        }else{
            res.json(post);
        }
    });

});

// Delete Post
router.delete('/:id',(req,res,next)=>{
    ConfirmOrder.findByIdAndRemove(req.params.id,req.body,(err,post)=>{
        if(err){
            return next(err);
        }else{
            res.json(post);
        }
    });

});

module.exports = router;