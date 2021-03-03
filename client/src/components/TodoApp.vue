<template>
    <div>
        <div class="addTodo">
            <input type="text" placeholder="Zadnie" v-model="newTitle">
            <button @click="addItem">Dodaj</button>
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
                    this.todos = response.data.reverse();
                })
                .catch(e => {
                    console.log(e)
                })
        },
        addItem(){
            console.log(this.newTitle)
            var data = {
                title: this.newTitle,
                description: ''
            };
            TodoDataServices.create(data)
                .then(res => {
                    this.todo.id = res.data.id;
                    this.retriveTodos();
                })
                .catch(e => {
                    console.log(e)
                })          
            this.newTitle = ''
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