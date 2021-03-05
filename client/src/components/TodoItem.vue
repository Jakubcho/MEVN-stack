<template>
    <div class="item" >
        <h3 @click="showOnClick">
            {{todo.title}}
        </h3>
        <div class="item__list" v-bind:class="{item__list_show: item__list_show} ">  
            <p @click="$event.target.classList.toggle('item__list__done')" :key="desc.id" v-for="desc in todo.description" >
                {{desc.name}}
            </p>
            <div class="item__list__edit" v-bind:class="{item__list_edit_show : item__list_edit_show}">
                <input  @keyup.enter="addListElements" type="text" placeholder="zadanie" v-model="newListElement"/>
                <p v-for="listEl in listElements" :key="listEl.id">{{listEl.name}}</p>
                <button class="btn" @click="updateItem">Dodaj zadania</button>
                <button class="btn" v-if="!todo.done===false" @click="deleteItem">Usuń liste</button>
            </div>
            <button class="btn" @click="showOnClickEditList" v-if="item__list_edit_show ===false">Edytuj listę</button>
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return {
            newDescriptionValue: '',
            listElement: {
                id: null,
                name: null,
            },
            listElements: [],
            newListElement: '',
            item__list_show: false,
            item__list_edit_show: false,
        }
    },
    props: ['todo'],
    methods: {
        showOnClickEditList(){
            if(this.item__list_edit_show === true){
                this.item__list_edit_show = false
            } else {
                this.item__list_edit_show = true
            }
        },
        showOnClick(){
            if(this.item__list_show===true){
                this.item__list_show= false}
            else {
                this.item__list_show = true
            }
        },
        addListElements(){
            if(this.newListElement !== ''){
                this.listElements.push({
                name: this.newListElement,
                id: Math.random(),
                done: false})
            }
            this.newListElement = ""
        },
        updateItem(){
            if(this.listElements.length !== 0){
                this.$emit('updateClicked', this.todo.id, this.listElements)
                this.listElements= [];
                this.item__list_edit_show = false;
            }
        },
        deleteItem(){
            this.$emit('deleteClicked', this.todo.id)
        }
    }
}
</script>