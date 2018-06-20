<template>
  <div class="form-select" :class="classNames" @click="clickHandler" @blur="hideOptionList" tabindex="1">
    <div class="form-label" v-if="label">{{label}}</div>

    <div class="select-value">{{valueText}}</div>

    <div class="select-options" v-show="isShowOptions">
      <slot></slot>
    </div>
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
  @Prop() label: string;
  @Prop() value: string | Array<string>;
  @Prop() placeholder: string;

  isShowOptions: boolean = false;

  get valueText() {
    const hasValue = this.isMultipleSelect ? this.value.length : this.value;

    if(hasValue) {
      return this.value;
    } else if(this.placeholder) {
      return this.placeholder;
    } else {
      return 'Please select an option.';
    }
  }

  get isMultipleSelect() {
    return this.value instanceof Array;
  }

  get classNames() {
    return this.isShowOptions ? 'show' : 'hide';
  }

  hideOptionList() {
    this.isShowOptions = false;
  }

  toggleOptionsShow() {
    this.isShowOptions = !this.isShowOptions;
  }

  clickHandler(event: MouseEvent) {
    // 设置 当前元素curSrcElement 和 前一次元素preSrcElement 都为 event.srcElement
    let curSrcElement = event.srcElement;
    let preSrcElement = curSrcElement;

    // 遍历父节点
    while(curSrcElement.parentElement) {
      const { className: curClassName } = curSrcElement;

      // 如果当前元素为select的值元素
      if(curClassName.includes('select-value')) {
        this.toggleOptionsShow();
        break;

      // 如果当前元素为select的选项容器元素
      } else if(curClassName.includes('select-options')) {
        // 取出前一次元素的value属性
        const attrValue = preSrcElement.attributes.getNamedItem('value');
        const attrSelected = preSrcElement.attributes.getNamedItem('selected');

        this.toggleOptionsShow();

        if(attrValue) {
          if(this.isMultipleSelect) {
            let valueArray = [...this.value as Array<string>];

            if(!attrSelected) {
              valueArray.push(attrValue.value);
            } else {
              valueArray = valueArray.filter(value => value !== attrValue.value);
            }
            this.$emit('input', valueArray);
          } else {
            this.$emit('input', attrValue.value);
          }
        }
        break;
      }

      // 遍历父节点
      preSrcElement = curSrcElement;
      curSrcElement = curSrcElement.parentElement;
    }
  }
}
</script>

<style type="text/scss" lang="scss">
.form-select {
  position: relative;
  line-height: 1.42857143;
  margin-bottom: 15px;
  outline: none;

  .form-label {
    font-size: 14px;
    margin-bottom: 5px;
  }
  
  .select-value {
    padding: 6px 42.5px 6px 12px;
    border: 1px solid #d2d6de;
    box-sizing: border-box;
    transition: border-color ease-in-out .15s;
  }
  .select-options {
    position: absolute;
    top: 100%;
    width: 100%;
    border: 1px solid #d2d6de;
    border-top: none;
    overflow-x: hidden;
    overflow-y: auto;
    max-height: 150px;
    background: white;
    box-sizing: border-box;
  }

  &.show {
    .select-value {
      border-color: #3c8dbc;
    }
  }

  &.hide {
    .select-value {
      border-color: #d2d6de;
    }

    .select-options {
      display: none;
    }
  }
}
</style>