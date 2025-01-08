<template>
  <div class="container">
    <div class="left">
      <button-custom
        v-for="(item, index) in rule1Data"
        :key="index"
        :text="item.text"
        :isSelected="item.selected"
        @click="isBoardChange(item.text)"
        class="max-width"
      />
    </div>
    <div class="middle">
      <button-custom
        id="addBtn"
        :text="`Add >>`"
        @click="changeBtn(2)"
        :disabled="canAddItem"
        :isDisabled="isDisAddBtn"
      />
      <button-custom
        id="removeBtn"
        :text="`<< Remove`"
        @click="changeBtn(1)"
        :disabled="canRemoveItem"
        :isDisabled="isDisRemoveBtn"
      />
    </div>
    <div class="right">
      <button-custom
        v-for="(item, index) in rule2Data"
        :key="index"
        :text="item.text"
        :isSelected="item.selected"
        @click="isBoardChange(item.text)"
        class="max-width"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelectBothSide',
  props: ['data'],
  emits: ['boardChange', 'changeItem'],
  methods: {
    isBoardChange(val) {
      this.$emit('boardChange', val)
    },
    changeBtn(val) {
      this.$emit('changeItem', val)
    },
  },
  computed: {
    rule1Data() {
      return this.data.filter((t) => t.rule == 1)
    },
    rule2Data() {
      return this.data.filter((t) => t.rule == 2)
    },
    // dataSelected(ruleParam) {
    //   return this.data.filter((t) => t.rule == ruleParam && t.selected == true)
    // },
    canAddItem() {
      return this.data.filter((t) => t.rule == 1 && t.selected == true).length == 0
    },
    canRemoveItem() {
      return this.data.filter((t) => t.rule == 2 && t.selected == true).length == 0
    },
    isDisAddBtn() {
      return this.canAddItem ? true : false
    },
    isDisRemoveBtn() {
      return this.canRemoveItem ? true : false
    },
  },
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
}

.left,
.right {
  width: 40%;
}

.middle {
  width: 20%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.max-width {
  width: 100%;
}

.isSelected {
  background-color: var(--strong-bg-color);
}

#addBtn,
#removeBtn {
  font-weight: bold;
}

#addBtn {
  background-color: var(--sub-bg-color);
}

#removeBtn {
  background-color: var(--danger-bg-color);
}
</style>
