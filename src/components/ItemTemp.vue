<template>
  <div class="item border_custom">
    <h3>{{ title }}</h3>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'ItemTemp',
  props: ['title'],
}
</script>
<style scoped>
.item {
  width: 30rem;
  height: auto;
  background-color: var(--main-bg-color);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.item h3 {
  font-weight: bold;
}

.border_custom {
  border: thin solid var(--strong-bg-color);
  border-radius: 1rem;
}
</style>
