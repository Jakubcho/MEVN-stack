const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
var corsOptions = {
    origin: 'http://localhost:8080'
}
app.use(cors(corsOptions));
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

app.get('/', (req,res) => {
    res.json({message: "Test"})
})

require("./app/routes/routes.js")(app);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is runing on Port ${PORT}`)
})