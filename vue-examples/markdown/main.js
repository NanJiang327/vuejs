var vm = new Vue({
  el: "#editor",
  data: {
    input: ''
  },
  computed: {
    compiledMarkdown: function(){
      return marked(this.input, {sanitize: true})
    }
  },
  
})