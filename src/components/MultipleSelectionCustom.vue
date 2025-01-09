<template>
  <div class="multipleContainer">
    <button-custom
      v-for="(item, index) in data"
      :key="index"
      :text="item.context"
      :isSelected="item.status"
      @click="isToggleBtn(item.context)"
    />
    <div class="output">
      <h3>item you selected:</h3>
      <ul>
        <li v-for="(item, index) in data" :key="index" v-show="item.status">
          {{ item.context + ', ' }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MultipleSelectionCustom',
  props: ['data'],
  emits: ['isToggleBtn'],
  methods: {
    isToggleBtn(val) {
      this.$emit('isToggleBtn', val)
    },
  },
}
</script>
<style scoped>
.item {
  background-color: aqua;
}

button {
  width: 10rem;
  height: 5rem;
}

li {
  display: inline;
}
</style>
