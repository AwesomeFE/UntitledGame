<template>
  <div class="smart-button">
    <button class="button" :type="type" @click="clickHandler" v-if="!to">
      <slot></slot>
    </button>
    <router-link class="button" :type="type" :to="to" @click="clickHandler" v-else>
      <slot></slot>
    </router-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { RawLocation } from 'vue-router';
import { Component, Prop, Emit } from 'vue-property-decorator';

@Component
export default class SmartButton extends Vue {
  @Prop({default: 'button'}) type: string;
  @Prop() to: RawLocation;

  @Emit('click')
  clickHandler(event: MouseEvent) {}
}
</script>

<style type="text/scss" lang="scss">
.smart-button {
  display: inline-block;
  .button {
    border: 1px solid transparent;
    padding: 6px 12px;
    outline: 0;
    cursor: pointer;
    display: inline-block;
  }

  &.btn-primary .button {
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