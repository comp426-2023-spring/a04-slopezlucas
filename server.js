#!/usr/bin/env node

import minimist from 'minimist';
import express from 'express';
import { rps, rpsls } from './lib/rpsls.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const argv = minimist(process.argv.slice(2));
const port = argv.port || 5000;

app.use(express.json());

//200 OK!
app.get('/app', (req, res, next) => {
    res.status(200).json("200 OK");
});

//200 for RPS & RPSLS
app.get('/app/rps', (req, res, next) => {
    res.status(200).json(rps());
});
app.get('/app/rpsls', (req, res, next) => {
    res.status(200).json(rpsls());
});


//HTTP GET Query for RPS/RPSLS
app.get('/app/rps/play', (req, res) => {
    res.status(200).send(rps(req.query.shot));
});
app.get('/app/rpsls/play', (req, res) => {
    res.status(200).send(rpsls(req.query.shot));
});

//HTTP POST Body for RPS/RPSLS
app.post('/app/rps/play', (req, res) => {
    res.status(200).send(rps(req.body.shot));
});
app.post('/app/rpsls/play', function(req, res) {
    const result = rpsls(req.body.shot);
    res.status(200).json(result);
  });

//HTTP POST Params for RPS/RPSLS
app.get('/app/rps/play/:shot', (req, res) => {
    const player = rps(req.params.shot);
    res.status(200).send(player);
});

app.get('/app/rpsls/play/:shot', (req, res) => {
    const player = rpsls(req.params.shot);
    res.status(200).send(player);
});

//Defaults to this for endpoint catcher?
app.use(function(req, res){
    res.status(404).json({'message': '404 NOT FOUND'});
});

//Run Server
app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});