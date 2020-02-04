import Vue from 'vue'

const app = new Vue({
  el: '#root',
  data: {
    text: 0
  },
  watch: {
    text (oldText, newText) {
      console.log(`${oldText} : ${newText}`)
    }
  },
  template: '<div>{{text}}</div>'
})

setInterval(() => {
  app.text += 1
}, 1000)

console.log(app.$el)
console.log(app.$data)
console.log(app.$props)
console.log(app.$options)
console.log(app.$root)
console.log(app.$children)
console.log(app.$slots)
console.log(app.$scopedSlots)
console.log(app.$refs)
console.log(app.$isServer)

const unwatch = app.$watch('text', (oldText, newText) => {
  console.log(`${oldText} : ${newText}`)
})

unwatch()

app.$options.render = (h) => {
  return h('div', {}, 'new Render function')
}

app.$on('test', (a, b) => {
  console.log(`test emited, ${a}, ${b}`)
})

app.$emit('test', 1, 2)

app.$forceUpdate()
