<template>
  <div>
    <div>
      <input v-model="inputValue" type="text" />
      <button @click="handleSubmit">Submit</button>
    </div>
    <ul>
      <todo-item v-for="(item, index) of list" :key="index" :content="item" index="index" @delete="handleClick"></todo-item>
    </ul>
  </div>
</template>

<script>
import TodoItem from './components/TodoItem'
export default {
  components: {
    'todo-item': TodoItem
  },
  data : function(){
    return {
      inputValue: '',
      list: []
    }
  },
  methods: {
    handleSubmit (){
      this.list.push(this.inputValue);
      this.inputValue = '';
    },
    handleClick(index){
      this.list.splice(index, 1)
    }
  }
}

</script>

<style>

</style>
