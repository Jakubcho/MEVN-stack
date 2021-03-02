module.exports = app => {
    const todos = require("../controllers/todo.controller.js");
    var express = require("express");
    var router = express();

    router.get("/", todos.findAll);
    router.post("/", todos.create);
    router.get("/:id", todos.findOne);
    router.delete("/:id", todos.delete);
    router.put("/:id", todos.update);

    app.use('/api/todos', router)
};