<template>
  <label class="c-checkbox">
    <input type="checkbox" class="has-hidden" />
    <span class="checkmark"></span>
    {{ title }}
  </label>
</template>
<script>
export default {
  name: 'CheckBox',
  props: ['title', 'checked'],
  methods: {
    onClick() {
      this.$emit('checked')
    },
  },
}
</script>
<style scoped>
* {
  cursor: pointer;
  user-select: none;
}

.has-hidden {
  opacity: 0;
  width: 0;
  height: 0;
}

.c-checkbox {
  display: inline-block;
  position: relative;
  padding-left: 3rem;
  margin-bottom: 1rem;
  font-weight: 500;
}

.c-checkbox input {
  position: absolute;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  width: 2rem;
  height: 2rem;
  border: thin solid var(--strong-bg-color);
  border-radius: 1rem;
  background-color: var(--cover-bg-color);
}

.c-checkbox:hover .checkmark {
  background-color: var(--main-bg-color);
}

.checkmark::after {
  content: '';
  position: absolute;
  display: none;
}

.c-checkbox .checkmark:after {
  top: 50%;
  left: 50%;
  width: 0.5rem;
  height: 1rem;
  border: solid white;
  border-width: 0 0.3rem 0.3rem 0;
  transform: translate(-50%, -50%) rotate(45deg);
}

.c-checkbox input:checked ~ .checkmark {
  background: var(--sub-bg-color);
}

.c-checkbox input:checked ~ .checkmark:after {
  display: block;
}
</style>
