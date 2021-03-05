<template>
    <div>
        <div class="header">
            <input class="header__input" @keyup.enter="addItem" type="text" placeholder="nowa lista" v-model="newTitle"/>
            <button class="btn" @click="addItem">Dodaj liste</button>
        </div>
        <TodoItem
            :key="todo.id"
            v-for="todo in todos"
            :todo="todo"
            @updateClicked="updateItem"
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
            listEle: [],
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
            if(this.newTitle!==''){ 
                var data = {
                    title: this.newTitle,
                    description: ""
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
            }
        },
        async updateItem(id, listElements){
            try {
                    let res = await TodoDataServices.get(id);
                    let element = res.data;
                    let elDesc = element.description;
                    this.listEle = [...elDesc, ...listElements]

                    var data = {
                        done: true,
                        description: this.listEle
                    }

                    await TodoDataServices.update(id, data);
                    this.retriveTodos();

                } catch(e){
                    console.log(e)
                }
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