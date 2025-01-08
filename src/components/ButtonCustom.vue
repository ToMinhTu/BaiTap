<template>
  <div class="buttonContainer" :class="{ isSelected, isDisabled }" @click="onClick">
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: 'ButtonCustom',
  props: ['text', 'isSelected', 'isDisabled'],
  emits: ['clicked'],
  methods: {
    onClick() {
      this.$emit('clicked')
    },
  },
}
</script>

<style scoped>
.buttonContainer {
  padding: 1rem;
  margin: 0 0.1rem;
  border: thin solid var(--strong-bg-color);
  border-radius: 1rem;
  background-color: var(--cover-bg-color);
  font-weight: bold;
  cursor: pointer;
  user-select: none;
  overflow: hidden;
  display: inline-block;
  text-align: center;
}

.buttonContainer:hover {
  background-color: var(--strong-bg-color);
  color: var(--cover-bg-color);
  border-color: var(--cover-bg-color);
}

.buttonContainer.isSelected {
  background-color: var(--sub-bg-color);
  color: var(--cover-bg-color);
  border-color: var(--cover-bg-color);
}

.buttonContainer.isDisabled:hover {
  background-color: var(--cover-bg-color);
  color: var(--color-text);
  border-color: var(--strong-bg-color);
  cursor: not-allowed;
}
</style>
