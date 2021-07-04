const EmailSubscription = require('../models/EmailSubscription');
const express =  require('express');

let router = express.Router();

//Get All
router.get('/',(req,res,next)=>{

    EmailSubscription.find((err,EmailSubscription)=>{
        if(err){
            return next(err);
        }else{
            res.json(EmailSubscription);
        }
    });

});

//Get By ID
router.get('/:id',(req,res,next)=>{

    EmailSubscription.findById(req.params.id,(err,EmailSubscription)=>{
        if(err){
            return next(err);
        }else{
            res.json(EmailSubscription);
        }
    });

});

// Create Post
router.post('/',(req,res,next)=>{

    EmailSubscription.create(req.body,(err,EmailSubscription)=>{
        if(err){
            return next(err);
        }else{
            res.json(EmailSubscription);
        }
    });

});

// Update Post
router.put('/:id',(req,res,next)=>{
    EmailSubscription.findByIdAndUpdate(req.params.id,req.body,(err,EmailSubscription)=>{
        if(err){
            return next(err);
        }else{
            res.json(EmailSubscription);
        }
    });

});

// Delete Post
router.delete('/:id',(req,res,next)=>{
    EmailSubscription.findByIdAndRemove(req.params.id,req.body,(err,EmailSubscription)=>{
        if(err){
            return next(err);
        }else{
            res.json(EmailSubscription);
        }
    });

});

module.exports = router;