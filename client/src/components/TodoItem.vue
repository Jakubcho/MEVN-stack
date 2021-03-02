<template>
    <div
    class="item"
    v-bind:class="{done: todo.done}">
        <h2>{{todo.title}}</h2>
        <p>{{todo.description}}</p>
        <button v-if="!todo.done" @click="removeItem">Done</button>
        <button v-if="!todo.done===false" @click="deleteItem">Remove from list</button>
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