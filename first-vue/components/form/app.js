class Errors {
  constructor() {
    this.errors = {}
  }

  get(field) {
    if(this.errors[field]){
      return this.errors[field][0]
    }
  }

  record(errors) {
    this.errors = errors
  }

  clear(field) {
    if (field) return delete this.errors[field]
  }

  has(field) {
    // if this.errors contains a  'field' property
    return this.errors.hasOwnProperty(field)
  }

  any() {
    return Object.keys(this.errors).length > 0
  }
}

class Form {
  constructor(data) {
    this.originData = data

    for (let field in data) {
      this[field] = data[field]
    }

    this.errors = new Errors()
  }

  reset() {
    for (let field in originData) {
      this[field] = ''
    }
  }

  data() {
    let data = Object.assign({}, this)

    delete data.originData
    delete data.errors

    return data
  }

  submit(requestType, url) {
    // axios
    return new Promise((resolve, reject) => {
      axios[requestType](url, this.data())
        .then(response => {
          this.onSuccess(response)

          resolve(response.data)
        })
        .catch(error => {
          this.onFail(error.response.data)
          
        })
    })
  }

  onSuccess(data) {
    alert(data.message)

    this.errors.clear()

    this.reset()
  }

  onFail(errors) {
    this.errors.record(errors)
  }
}

new Vue({
  el: '#root',
  data: {
    form: new Form({
      name: '',
      description: ''
    })
  },

  methods: {
    onSubmit() {
      this.form.submit('post', '/projects')
        .then(data => alert('Handing it!'))
    }
  }
})