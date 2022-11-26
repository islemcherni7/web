var express=require('express');
var router = express.Router();
var db = require('../models/Universite')

router.post('/add', (req, res)=>{
    db.Universite.create(req.body).then((response)=>{
        res.status(200).send(response)}).catch((err=>{
            res.status(400).send(err)
        }))
    });


    router.put('/update/:id', (req, res)=>{
        db.Universite.update(req.body, {where:{id:req.params.id}}).then((response)=>{
            res.status(200).send(response)}).catch((err=>{
                res.status(400).send(err)
            }))
        });

        router.delete('/remove/:id', (req, res)=>{
            db.Universite.destory(req.body,{where:{id:req.params.id}}).then((response)=>{
                res.status(200).send(response)}).catch((err=>{
                    res.status(400).send(err)
                }))
            });

            router.get('/universite/:id', (req, res)=>{
                db.Universite.findOne(req.body,{where:{id:req.params.id}}).then((response)=>{
                    res.status(200).send(response)}).catch((err=>{
                        res.status(400).send(err)
                    }))
                });

                router.get('/fetch', (req, res)=>{
                    db.Universite.findAll().then((response)=>{
                        res.status(200).send(response)}).catch((err=>{
                            res.status(400).send(err)
                        }))
                    });

module.exports= router;
