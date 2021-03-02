<template>
  <main>
    <section class="glass">
      <h1>Todo App</h1>
      <TodoApp />
    </section>
    <div class="circle1"></div>
    <div class="circle2"></div>
  </main>
</template>

<script>
import Todo from './components/TodoApp.vue';

export default {
  components: {
    TodoApp: Todo
  }
}
</script>
<style>
   @import './assets/app.css';
</style>