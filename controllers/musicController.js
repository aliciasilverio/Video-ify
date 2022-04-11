const express = require('express');
const router = express();
const Music = require('../models/music');

//Sending JSON to the front-end
router.get('/', async (req, res)=> {
//If there aren't any errors I'm sending this object
    try{
        // this const used to say "items"
        const search = await Music.find();
        res.send({
            success: true,
            data: search
        });
//If there's an error I'm sending this object
    }catch(err){
        res.send({
            success: false,
            data: err
        })
    }
});

router.post('/', async (req, res)=> {
    try{
        // this const used to say newItem
        const newSearch = await Music.create(req.body);
        res.send({
            success:true,
            data: newSearch
        })
    }catch(err){
        res.send({
            success: true,
            data: err
        })
    }
});

router.get('/:id', async (req, res)=> {
    try{
        //this const used to read "item"
        const music = await Music.findById(req.params.id);
        if(!music){
            throw new Error("No music by that id here!")
        }
        res.send({
            success:true,
            data:music
        })
    } catch(err){
        res.send({
            success:false,
            data: err.message
        })
    }
});

router.delete('/:id', async (req, res)=> {
    try{
        const music = await Music.findByIdAndDelete(req.params.id);
        res.send({
            success:true,
            data:music
        })
    } catch(err){
        res.send({
            success:false,
            data: err
        })
    }
});

router.put('/:id', async (req, res)=> {
    try{
        const music = await Music.findByIdAndUpdate(req.params.id, req.body, {new:true});
        res.send({
            success:true,
            data:music
        })
    } catch(err){
        res.send({
            success:false,
            data: err
        })
    }
});





//exposing the router to the app
module.exports = router;