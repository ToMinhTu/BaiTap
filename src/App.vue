<template>
  <div class="container">
    <div class="item">
      <ItemTemp :title="'searching input'">
        <InputCustom :placeholder="'Edit me'" :value="searchingData" @change="onChangeSearching" />
        <p>Result: {{ searchingData }}</p>
      </ItemTemp>
      <ItemTemp :title="'checkbox'">
        <CheckBox :title="'Hello'" />
        <CheckBox :title="'Agree?'" />
      </ItemTemp>
    </div>
    <div class="item">
      <ItemTemp :title="'accordion menu'">
        <AccordionMenuCustom :data="accordionData" />
      </ItemTemp>
      <ItemTemp :title="'multiple selection custom'">
        <MultipleSelectionCustom
          :data="multipleSelectionData"
          @isToggleBtn="addCheckedSelectData"
        />
      </ItemTemp>
    </div>

    <ItemTemp :title="'Select both side'" id="both_side_box">
      <SelectBothSide
        :data="selectBothSideData"
        @boardChange="toggleBoardChange"
        @changeItem="changeRuleFunc"
      />
    </ItemTemp>
  </div>
</template>

<script>
import ItemTemp from './components/ItemTemp.vue'
import AccordionMenuCustom from './components/AccordionMenuCustom.vue'
import MultipleSelectionCustom from './components/MultipleSelectionCustom.vue'
import SelectBothSide from './components/SelectBothSide.vue'
import CheckBox from './components/CheckBox.vue'
import InputCustom from './components/InputCustom.vue'

export default {
  components: {
    ItemTemp,
    AccordionMenuCustom,
    MultipleSelectionCustom,
    SelectBothSide,
    CheckBox,
    InputCustom,
  },
  data() {
    return {
      searchingData: '',
      isCBChecked: false,
      checked: false,
      accordionData: [
        { title: 'History', data: ['History 1', 'History 2', 'History 3'] },
        { title: 'Fiction', data: ['Fiction 1', 'Fiction 2', 'Fiction 3'] },
        { title: 'Fantasy', data: ['Fantasy 1', 'Fantasy 2', 'Fantasy 3'] },
        { title: 'Action', data: ['Action 1', 'Action 2', 'Action 3'] },
      ],
      multipleSelectionData: [
        { context: 'html', status: false },
        { context: 'css', status: false },
        { context: 'javascript', status: false },
        { context: 'react native', status: false },
        { context: 'vuejs', status: false },
        { context: 'nodejs', status: false },
        { context: 'mysql', status: false },
      ],
      selectBothSideData: [
        { text: 'Vs Code', selected: false, rule: 1 },
        { text: 'Vim', selected: false, rule: 1 },
        { text: 'Neo Vim', selected: false, rule: 1 },
        { text: 'Notepad++', selected: false, rule: 1 },
        { text: 'Sublime Text', selected: false, rule: 1 },
        { text: 'Atom', selected: false, rule: 2 },
        { text: 'Vs Studio', selected: false, rule: 2 },
      ],
    }
  },
  methods: {
    onChangeSearching(val) {
      this.searchingData = val
    },
    addCheckedSelectData(val) {
      let findData = this.multipleSelectionData.find((item) => item.context == val)
      findData.status = !findData.status
    },
    toggleBoardChange(val) {
      let findData = this.selectBothSideData.find((item) => item.text == val)
      findData.selected = !findData.selected
    },
    changeRuleFunc(val) {
      this.selectBothSideData.forEach((element) => {
        if (element.selected == true) {
          element.selected = false
          element.rule = val
        }
      })
    },
  },
}
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
}

.item {
  display: flex;
  gap: 10rem;
}

#both_side_box {
  width: 80%;
}
</style>
