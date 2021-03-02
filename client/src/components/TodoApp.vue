<template>
    <div>
        <div class="item">
            <input type="text" placeholder="text" v-model="newTitle">
            <input type="text" placeholder="text" v-model="newDescription">
            <button @click="addItem">Add item</button>
        </div>
        <TodoItem
            :key="todo.id"
            v-for="todo in todos"
            :todo="todo"
            @removeClicked="removeItem"
            @deleteClicked="deleteItem"
        />
    </div>
</template>

<script>
import TodoItem from './TodoItem.vue';
import TodoDataServices from '../services/TodoDataServices';

export default {
    components: {
        TodoItem
    },
    data(){
        return {
            todo: {
                id: null,
                title: "",
                description: "",
                done:false
            },
            todos: [],
            newTitle: '',
            newDescription: ''
        }
    },
    methods: {
        retriveTodos(){
            TodoDataServices.getAll()
                .then(response => {
                    this.todos = response.data;
                    console.log(response.data)
                })
                .catch(e => {
                    console.log(e)
                })
        },
        addItem(){
            console.log(this.newTitle)
            var data = {
                title: this.newTitle,
                description: this.newDescription
            };
            TodoDataServices.create(data)
                .then(res => {
                    this.todo.id = res.data.id;
                    console.log(res.data);
                    this.retriveTodos();
                })
                .catch(e => {
                    console.log(e)
                })
            /*this.todos.push({
                title:this.newItem,
                done: false,
                id: Math.random()}),*/
            
            this.newItem = ''
        },
        removeItem(id){
            var data = {
                done: true
            }
            console.log(data)
            TodoDataServices.update(id, data)
                .then(response => {
                    console.log(response.data)
                    this.retriveTodos();
                })
                .catch(e => {
                    console.log(e)
                })
            /*const index = this.todos.findIndex(el => el.id === id)
            this.todos[index].done = true*/
        },
        deleteItem(id){
            TodoDataServices.delete(id)
                .then(res => {
                    console.log(res.data)
                    this.retriveTodos();
                })
                .catch(e => {
                    console.log(e)
                })
        }
    },
    mounted(){
        this.retriveTodos();
    }
}
</script>