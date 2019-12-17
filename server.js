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

app.get('/notes/:id', (req, res) => {
    collection.findOne({'_id' : new ObjectId(req.params.id)}, (err, result) => {
        res.send(result);
    })
}); 

app.get('/notes', (req, res) => {
    collection.find({}).toArray((err, result) => {
        res.send(result);
    })
});

app.post('/notes/add', function(req, res) {
    var myobj = {headline : req.body.headline, content : req.body.content};
    collection.insertOne(myobj, function (err, result) {
        res.send(myobj);
    })
});

app.listen(4242, () => {
    client.connect(err => {
        collection = client.db("Acme").collection("Notes");
        console.log('Connect to db');
    });
});