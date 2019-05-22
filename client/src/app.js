const FormView = require('./views/form_view.js')
const Bucket = require('./models/bucket.js')

document.addEventListener('DOMContentLoaded', () => {
  console.log('javascript loaded');

  const url = 'http://localhost:3000/api/goals'
  const bucket = new Bucket(url)
  bucket.bindEvents()

  const form = document.querySelector('form#form')
  const formView = new FormView(form)
  formView.bindEvents()
})
