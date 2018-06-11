<template>
  <label class="form-control" :class="classNames">
    <div v-if="label">{{label}}</div>
    <input
      v-if="validate"
      v-validate="validate"
      :name="name"
      :type="type"
      :value="value"
      :disabled="disabled"
      :placeholder="placeholder"
      @input="$emit('input', $event.target.value)"
    />
    <input
      v-else
      :name="name"
      :type="type"
      :value="value"
      :disabled="disabled"
      :placeholder="placeholder"
      @input="$emit('input', $event.target.value)"
    />
  </label>
</template>

<script lang="ts">
import Vue from "vue";
import { Validator } from 'vee-validate';
import { Component, Prop, Inject } from "vue-property-decorator";

@Component
export default class FormInput extends Vue {
  @Prop() name: string;
  @Prop() type: string;
  @Prop() label: string;
  @Prop() value: string;
  @Prop() disabled?: string;
  @Prop() validate?: string;
  @Prop() className: string;
  @Prop() placeholder: string;

  @Inject('$validator') $validator: Validator;

  get classNames(): Array<string> {
    const classNames = [this.className];

    this.isError ? classNames.push('has-error') : null;

    return classNames;
  }

  get isError(): boolean {
    return this.$validator.errors.items.some(item => item.field === this.name);
  }
}
</script>

<style type="text/scss" lang="scss">
.form-control {
  display: block;
  line-height: 1.42857143;
  margin-bottom: 15px;

  input {
    display: block;
    width: 100%;
    padding: 6px 42.5px 6px 12px;
    border: 1px solid #d2d6de;
    box-sizing: border-box;
    outline: 0;
    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;

    &:focus {
      border-color: #3c8dbc;
    }

    &[disabled] {
      cursor: not-allowed;
    }
  }

  &.has-error {
    input {
      border-color: #dd4b39;
    }
  }
}
</style>