<template>
  <div class="form-select" @click="clickHandler">
    <div class="select-value"></div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

interface Option {
  value: string;
}

@Component
export default class FormSelect extends Vue {
  @Prop() value: string;

  clickHandler(event: MouseEvent) {
    const target = event.target as HTMLDivElement;
    console.log(target.attributes.getNamedItem('value').value)
  }

  setEventListener() {
    const selectEl = this.$refs['selectEl'] as HTMLSelectElement;
    const observer = new MutationObserver(this.freshSelectView);
    observer.observe(selectEl, { attributes: true, childList: true, characterData: true });
  }

  freshSelectView() {
    const optionEl = this.$slots.default.filter(vNode => !!vNode.tag).map(vNode => vNode.elm);

    // this.optionArray = [];

    // for(let i = 0; i < optionEl.length; i++) {
    //   const value = optionEl[i].attributes.getNamedItem('value').value;

    //   this.optionArray.push({ value });
    // }
  }
}
</script>

<style type="text/scss" lang="scss">
.form-select {
  .select {
    display: none;
  }
}
</style>