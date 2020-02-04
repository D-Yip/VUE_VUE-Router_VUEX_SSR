<template>
  <div :class="['todo-item',todo.completed?'completed':'']">
    <input
      v-model="todo.completed"
      type="checkbox"
      class="todo-item-toggle"
    >
    <label>{{ todo.content }}</label>
    <button
      class="todo-item-del"
      @click="deleteTodo"
    />
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  methods: {
    deleteTodo () {
      this.$emit('del', this.todo.id)
    }
  }
}
</script>

<style lang="stylus" scoped>
.todo-item {
  position: relative;
  background: #fff;
  font-size: 24px;
  width 100%;
  padding: 16px;
  border-bottom: 1px solid rgba(0,0,0,.06);
  label {
      white-space: pre-line;
      word-break: break-all;
      padding: 15px 60px 15px 15px;
      margin-left: 45px;
      display: block;
      line-height: 1.2;
      transition: 0.4s;
  }
  &.completed {
      label {
          color: #d9d9dd;
          text-decoration: line-through
      }
  }
  &-toggle {
      text-align: center;
      width: 40px;
      height: 40px;
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto 0;
      border: none;
      appearance: none;
      outline: none;
      &:after {
          content:  url('../../assets/images/done.svg')
      }
      &:checked:after {
          content:  url('../../assets/images/completed.svg')
      }
  }
  &-del {
      position: absolute;
      top: 11px;
      right: 10px;
      bottom: 0;
      width: 40px;
      height: 40px;
      margin: auto 0;
      font-size: 30px;
      background-color: transparent;
      border-width: 0;
      cursor: pointer;
      outline:none;
      background: url('../../assets/images/close.svg') no-repeat
  }
}
</style>
