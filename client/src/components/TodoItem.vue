<template>
    <div
    class="item"
    v-bind:class="{done: todo.done}">
        <h3>{{todo.title}}</h3>
        <button v-if="!todo.done" @click="removeItem">Zrobione</button>
        <button v-if="!todo.done===false" @click="deleteItem">Usuń z listy</button>
    </div>
</template>

<script>
export default {
    props: ['todo'],
    methods: {
        removeItem(){
            console.log(this.todo.done)
            this.$emit('removeClicked', this.todo.id)
        },
        deleteItem(){
            this.$emit('deleteClicked', this.todo.id)
        }
    }
}
</script>