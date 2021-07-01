const Contacts = require('../models/Contacts');
const express =  require('express');

let router = express.Router();

//Get All
router.get('/',(req,res,next)=>{

    Contacts.find((err,contacts)=>{
        if(err){
            return next(err);
        }else{
            res.json(contacts);
        }
    });

});

//Get By ID
router.get('/:id',(req,res,next)=>{

    Contacts.findById(req.params.id,(err,post)=>{
        if(err){
            return next(err);
        }else{
            res.json(post);
        }
    });

});

// Create Post
router.post('/',(req,res,next)=>{

    Contacts.create(req.body,(err,post)=>{
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
    Contacts.findByIdAndUpdate(req.params.id,req.body,(err,post)=>{
        if(err){
            return next(err);
        }else{
            res.json(post);
        }
    });

});

// Delete Post
router.delete('/:id',(req,res,next)=>{
    Contacts.findByIdAndRemove(req.params.id,req.body,(err,post)=>{
        if(err){
            return next(err);
        }else{
            res.json(post);
        }
    });

});

module.exports = router;