//const { todo } = require("../models");
const db = require("../models");
const Todo = db.todos;


//getAll
exports.findAll = (req,res) => {
    if(!req.body){
        console.log("Database can not be empty");
    }

    Todo.find()
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Can not get all todos"
            })
        })
}

//create
exports.create = (req,res) => {
    if(!req.body.title){
        console.log("title can not be empty")
    }

    const todo = new Todo({
        title: req.body.title,
        description: req.body.description,
        done: req.body.done ? req.body.done : false
    })

    todo
        .save(todo)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: 
                err.message || console.log("Can not add do dabase")
            })
        })
}

//findOne
exports.findOne = (req,res) => {
    const id = req.params.id;
    Todo.findById(id)
    .then(data => {
        if(!data){
            res.status(404).send({
                message: "Not found todo with id"+id
            })
        } else {
            res.send(data);
        }
    })
    .catch(err => {
        res.status(500).send({message: "Error retriving Todo with id"})
    })
  
}

//delete
exports.delete = (req,res) => {
    const id = req.params.id;

    Todo.findByIdAndRemove(id)
        .then(data => {
            if(!data){
               res.status(404).send({message: "Dont exist"})
            } else {
                res.send("Todo was success delete")
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete todo with id " + id
            })
        })
}

//update

exports.update = (req,res) => {
    const id = req.params.id;

    Todo.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({
                    message: "Can not update by id: " + id
                })
            } else res.send({
                message: "Successfully update"
            })
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Todo with id " + id
            })
        })
}