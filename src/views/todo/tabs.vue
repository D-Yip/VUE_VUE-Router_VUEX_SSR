<template>
  <div class="nav">
    <span class="nav-left">{{ unFinishedTodoLength }} items left</span>
    <span class="nav-tabs">
      <span
        v-for="state in states"
        :key="state"
        :class="[state,filter === state?'actived':'']"
        @click="toggleFilter(state)"
      >
        {{ state }}
      </span>
    </span>
    <span
      class="nav-right"
      @click="clearAllCompleted"
    >Clear Completed</span>
  </div>
</template>

<script>
export default {
  props: {
    todos: {
      type: Array,
      require: true
    },
    filter: {
      type: String,
      require: true
    }
  },
  data () {
    return {
      states: [
        'all', 'active', 'completed'
      ]
    }
  },
  computed: {
    unFinishedTodoLength () {
      return this.todos.filter(todo => !todo.completed).length
    }
  },
  methods: {
    clearAllCompleted () {
      this.$emit('clearAllCompleted')
    },
    toggleFilter (state) {
      this.$emit('toggle', state)
    }
  }
}
</script>

<style lang="stylus" scoped>
.nav {
  font-weight: 100;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  width 100%
  line-height: 30px;
  background: #fff;
  font-size: 14px;
  &-left,&-right,&-tabs {
      padding: 0 10px;
      box-sizing: border-box
  }
  &-left,&-right {
      width: 150px
  }
  &-left {
      text-align: left
  }
  &-right {
      text-align: right;
      cursor: pointer;
  }
  &-tabs {
      width: 200px;
      display: flex;
      justify-content: space-around;
      * {
          display: inline-block;
          padding: 0 10px;
          cursor: pointer;
          border: 1px solid rgba(175,47,47,0);
          &.actived {
              border-color: rgba(175,47,47,0.4);
              border-radius: 5px;
          }
      }
  }
}
</style>
