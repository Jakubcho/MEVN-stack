const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require('path');
const serveStatic = require('serve-static');

const app = express();
const corsOption = {
    origin: 'https://todo-jch.herokuapp.com/'
}
app.use(cors(corsOption));
app.use(bodyParser.json())

const db = require("./app/models");
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(()=> {
        console.log("connected to the database")
    })
    .catch(err => {
        console.log("Cannot connect with database ", err)
        process.exit()
    })

app.use(serveStatic(__dirname + "/dist"));

require("./app/routes/routes.js")(app);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is runing on Port ${PORT}`)
})
