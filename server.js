const express = require('express');
const BodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;
const uri = "mongodb+srv://Agnes:Britta398@acme-oij5h.mongodb.net/test?retryWrites=true&w=majority";

const port = process.env.PORT;

var collection;
const app = express();
const client = new MongoClient(uri, {useNewUrlParser: true}, {useUnifiedTopology: true});

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send("I am also stayin alive");
}); 

app.get('/notes', (req, res) => {
    collection.find({}).toArray((err, result) => {
        res.send(result);
    })
});

app.listen(4242, () => {
    client.connect(err => {
        collection = client.db("Acme").collection("Notes");
        console.log('Connect to db');
    });
});