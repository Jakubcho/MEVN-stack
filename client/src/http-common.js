import axios from 'axios';

export default axios.create({
    baseURL: "https://todo-jch.herokuapp.com/api" || "http://localhost:8000/api",
    headers: {
        "Content-type":"application/json"
    }
})
