const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.get('/', (req, res)=>{
    // res.send("got a GET request");
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/', (req, res)=>{
    res.send("got a POST request");
});

app.put('/', (req, res)=>{
    res.send("got a PUT request")
});

app.delete('/', (req, res)=>{
    res.send("got a DELETE request");
});

app.listen(port, ()=>{
    console.log("App listening on port http://localhost:3000");
})