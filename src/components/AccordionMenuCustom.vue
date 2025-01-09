<template>
  <ul>
    <li v-for="(item, index) in data" :key="index" @click="isToggle(index)">
      <div class="titleItem" :class="{ isSelected: visibleItemIndex == index }">
        <p>{{ item.title }}</p>
        <svg-icon v-if="visibleItemIndex == index" type="mdi" :path="iconUp"></svg-icon>
        <svg-icon v-else type="mdi" :path="iconDown"></svg-icon>
      </div>
      <transition>
        <ul v-show="visibleItemIndex == index" class="child">
          <li v-for="(itemChild, indexChild) in item.data" :key="indexChild">
            <a href="#">{{ itemChild }}</a>
          </li>
        </ul>
      </transition>
    </li>
  </ul>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiMenuDown, mdiMenuUp } from '@mdi/js'
export default {
  name: 'AccordionMenuCustom',
  props: ['data'],
  components: {
    SvgIcon,
  },
  data() {
    return {
      visibleItemIndex: null,
      iconUp: mdiMenuUp,
      iconDown: mdiMenuDown,
    }
  },
  methods: {
    isToggle(currentIndex) {
      if (this.visibleItemIndex == currentIndex) {
        this.visibleItemIndex = null
        this.iconPath = mdiMenuDown
      } else {
        this.visibleItemIndex = currentIndex
        this.iconPath = mdiMenuUp
      }
    },
  },
}
</script>
<style scoped>
li {
  user-select: none;
  cursor: pointer;
}

.titleItem {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: thin solid var(--strong-bg-color);
}

.titleItem p {
  font-weight: bold;
}

.titleItem:hover {
  background-color: var(--cover-bg-color);
}

.v-enter-active {
  animation: added 0.3s linear;
}

.v-leave-active {
  animation: added 0.3s linear reverse;
}

@keyframes added {
  from {
    max-height: 0;
  }
  to {
    max-height: 10rem;
  }
}

.child {
  overflow: hidden;
}

.isSelected {
  background-color: var(--cover-bg-color);
}

a {
  display: block;
  padding: 1rem;
  border-bottom: thin solid var(--main-bg-color);
  background-color: var(--strong-bg-color);
  color: var(--cover-bg-color);
}

a:hover {
  background-color: var(--sub-bg-color);
}
</style>
