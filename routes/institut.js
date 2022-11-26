var express=require('express');
var router = express.Router();
var db = require('../models')

router.post('/add', (req, res)=>{
    db.Institut.create(req.body).then((response)=>{
        res.status(200).send(response)}).catch((err=>{
            res.status(400).send(err)
        }))
    });


    router.put('/update/:id', (req, res)=>{
        db.Institut.update(req.body, {where:{id:req.params.id}}).then((response)=>{
            res.status(200).send(response)}).catch((err=>{
                res.status(400).send(err)
            }))
        });

        router.delete('/remove/:id', (req, res)=>{
            db.Institut.destory(req.body,{where:{id:req.params.id}}).then((response)=>{
                res.status(200).send(response)}).catch((err=>{
                    res.status(400).send(err)
                }))
            });

            router.get('/institut/:id', (req, res)=>{
                db.Institut.findOne(req.body,{where:{id:req.params.id}}).then((response)=>{
                    res.status(200).send(response)}).catch((err=>{
                        res.status(400).send(err)
                    }))
                });

                router.get('/fetch', (req, res)=>{
                    db.Institut.findAll().then((response)=>{
                        res.status(200).send(response)}).catch((err=>{
                            res.status(400).send(err)
                        }))
                    });

module.exports= router;
