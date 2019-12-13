const express = require('express');
const BodyParser = require('body-parser');

const port = process.env.PORT;

const app = express();

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send("I am also alive");
}); 

app.listen(port, () => {
    console.log("I am alive");
});