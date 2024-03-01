var http = require('http');
const express = require("express");
const cors = require("cors");
const { default: axios } = require('axios');
const { error } = require('console');
const app = express();
const API_KEY = 'd47123cb23mshcdcd9c2d696df97p106538jsn8677da28fb6d';
const BASE_URL = 'http://imdb-top-100-movies.p.rapidapi.com/';
const HOST = 'imdb-top-100-movies.p.rapidapi.com';
const config = {
    httpsAgent: new http.Agent({
        rejectUnauthorized: false
    })
};


const OPEN_JSON_PLACEHOLDER = 'https://jsonplaceholder.typicode.com/posts';
const USERS_API = 'https://jsonplaceholder.typicode.com/users';

app.use(cors());
app.use(express.json());

app.get("/", (req, res, err) => {
    console.log("jut hit");
    res.send("Hello mate!");
})

app.get("/hello", (req, res, err) => {
   res.status(500).send({
    message: "internal server error"
   });
    // res.send();
})

app.get("/imdb-list", (req, res, err) => {
    const url = BASE_URL;
    const _options = {
        url,
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': HOST,
        }
    }
    http.get(_options);
})



app.get('/get-posts', async (req, res, err) => {

    try {
        console.log("[REQ REceived]", req);
        const response = await axios.get(OPEN_JSON_PLACEHOLDER);
        console.log(response.data);
        res.send(response.data);
    } catch (error) {
        console.error('error---', error);
    }
})


app.get('/users', async (req, res, err) => {
    const _options = {
        url: USERS_API,
        method: 'GET',
    }

    try {
        console.log("[REQ REceived]", JSON.stringify(_options));
        const response = await axios.request(_options);
        res.send(response.data)
    } catch (error) {
        console.error('error---', error);
    }

})
app.listen(4002, function () {
    console.log("Server listening on port 4002!")
})
