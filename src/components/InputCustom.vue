<template>
  <div class="c-input -border-custom" :class="{ warn: error, success: !error }">
    <input
      class="c-i--item"
      type="text"
      :placeholder="placeholder"
      :value="value"
      @input="onInput"
      @change="onChange"
    />
    <svg-icon class="search_icon" type="mdi" :path="searchIcon"></svg-icon>
  </div>
  <p class="p-warn">{{ error ? error : '✅' }}</p>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiMagnify } from '@mdi/js'
export default {
  name: 'InputCustom',
  props: ['placeholder', 'value'],
  emits: ['input', 'change'],
  components: {
    SvgIcon,
  },
  data() {
    return {
      searchIcon: mdiMagnify,
      error: 'Value should not be empty',
    }
  },
  methods: {
    onChange(event) {
      const value = event.target.value
      !value ? (this.error = 'Value should not be empty') : (this.error = '')
      this.$emit('change', value)
    },
    onInput(event) {
      this.$emit('input', event.target.value)
    },
  },
}
</script>

<style scoped>
.c-input {
  background-color: #fff;
  width: 100%;
  display: flex;
  padding: 0.4rem;
  align-items: center;
  justify-content: space-between;
  gap: 0.2rem;
}

.-border-custom {
  border: thin solid var(--strong-bg-color);
  border-radius: 1rem;
}

.warn {
  border-color: var(--danger-bg-color);
}

.success {
  border-color: var(--sub-bg-color);
}

.c-input:focus-within {
  outline: thin solid;
  border-color: var(--strong-bg-color);
}

.c-i--item {
  padding: 0.4rem;
  width: 90%;
  border-width: 0;
  outline: none;
  font-size: medium;
  border-radius: 1rem;
}

.c-i--item::placeholder {
  font-style: italic;
}

.c-i--item:focus {
  outline: none;
}

.p-warn {
  color: var(--danger-bg-color);
  font-style: italic;
  font-weight: 500;
}
</style>
