<template>
  <button class="form-button" :class="className" :type="type" @click="clickHandler">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop, Emit } from 'vue-property-decorator';

@Component
export default class FormButton extends Vue {
  @Prop() className: string;
  @Prop({default: 'button'}) type: string;

  @Emit('click')
  clickHandler(event: MouseEvent) {}
}
</script>

<style type="text/scss" lang="scss">
.form-button {
  border: 1px solid transparent;
  padding: 6px 12px;
  outline: 0;
  cursor: pointer;

  &.btn-primary {
    color: white;
    background: #3c8dbc;
    border-color: #367fa9;

    &:hover {
      background: #367fa9;
    }

    &:active {
      background: #286090;
      border-color: #122b40;
    }

    &[disabled] {
      cursor: not-allowed;
      opacity: .65;
    }
  }
}
</style>