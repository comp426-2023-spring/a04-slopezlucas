#!/usr/bin/env node

import minimist from 'minimist';
import { rps, rpsls } from './lib/rpsls.js';
import express from 'express';

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const argv = minimist(process.argv.slice(2));
const port = argv.port || 5000;

app.use(express.json());

//200 OK!
app.get('/app', function(req, res) {
    res.status(200).send("200 OK");
});

//200 for RPS & RPSLS
app.get('/app/rps', function(req, res) {
    res.status(200).send(rps());
});
app.get('/app/rpsls', function(req, res) {
    res.status(200).send(rpsls());
});


//HTTP GET Query for RPS/RPSLS
app.get('/app/rps/play', function(req, res) {
    const player = rps(req.query.shot);
    res.status(200).send(rps(req.query.shot));
});
app.get('/app/rpsls/play', function(req, res) {
    const player = rpsls(req.query.shot);
    res.status(200).send(player);
});

//HTTP POST Body for RPS/RPSLS
app.post('/app/rps/play', function(req, res) {
    const player = rps(req.body.shot);
    res.status(200).send(player);
});
app.post('/app/rpsls/play', function(req, res) {
    const player = rpsls(req.body.shot);
    res.status(200).send(player);
});

//HTTP POST Params for RPS/RPSLS
app.get('/app/rps/play/:shot', function(req, res) {
    const player = rps(req.params.shot);
    res.status(200).send(player);
});

app.get('/app/rpsls/play/:shot', function(req, res) {
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