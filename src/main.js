import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/scss/bootstrap-flex.scss'
import 'highlight.js/styles/github.css'
import hljs from 'highlight.js'
import './assets/custom.scss'


new Vue({
  el: '#app',
  render: h => h(App)
})

hljs.initHighlighting()

