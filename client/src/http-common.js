import axios from 'axios';

export default axios.create({
    baseURL: "https://todo-jch.herokuapp.com/api",
    headers: {
        "Content-type":"application/json"
    }
})
