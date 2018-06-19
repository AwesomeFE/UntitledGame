<template>
  <div class="form-select">
    <div class="select-value"></div>
    <div class="form-option" v-for="option in optionArray" :key="option.value">{{option.title}}</div>
    <select class="select" ref="selectEl">
      <slot></slot>
    </select>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

interface Option {
  title: string;
  value: string;
}

@Component
export default class FormSelect extends Vue {
  @Prop() value: string;

  optionArray: Array<Option> = [];

  mounted() {
    this.freshSelectView();
    this.setEventListener();
  }

  setEventListener() {
    const selectEl = this.$refs['selectEl'] as HTMLSelectElement;
    const observer = new MutationObserver(this.freshSelectView);
    observer.observe(selectEl, { attributes: true, childList: true, characterData: true });
  }

  freshSelectView() {
    const selectEl = this.$refs['selectEl'] as HTMLSelectElement;
    const optionEl = selectEl.querySelectorAll('option');

    this.optionArray = [];

    for(let i = 0; i < optionEl.length; i++) {
      const value = optionEl[i].value;
      const title = optionEl[i].innerText;

      this.optionArray.push({ title, value });
    }
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