<template>
</template>

<script>
import Vue from 'vue';
import GUI from 'babylonjs-gui';
import { Component, Watch } from 'vue-property-decorator';

@Component({
  inject: [
    '$container2D'
  ],
  props: {
    name: String,
    value: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    height: {
      type: String,
      default: '100%'
    },
    width: {
      type: String,
      default: '100%'
    },
    horizontalAlignment: Number,
    verticalAlignment: Number,
    left: {
      type: String,
      default: '0%'
    },
    top: {
      type: String,
      default: '0%'
    },
    paddingTop: {
      type: String,
      default: '0%'
    },
    paddingBottom: {
      type: String,
      default: '0%'
    },
    paddingLeft: {
      type: String,
      default: '0%'
    },
    paddingRight: {
      type: String,
      default: '0%'
    },
    color: {
      type: String,
      default: 'white'
    },
    background: {
      type: String,
      default: 'green'
    },
    focusedBackground: {
      type: String,
      default: 'green'
    },
    placeholderText: {
      type: String,
      default: ''
    },
    thickness: {
      type: Number,
      default: 0
    }
  }
})
class OneInput extends Vue {
  input = null;

  mounted() {
    this.inputHandler = this.inputHandler.bind(this);

    this.input = new GUI.InputText(this.name);
    this.input.width = this.width;
    this.input.height = this.height;
    this.input.top = this.top;
    this.input.left = this.left;
    this.input.verticalAlignment = this.verticalAlignment;
    this.input.horizontalAlignment = this.horizontalAlignment;
    this.input.paddingTop = this.paddingTop;
    this.input.paddingBottom = this.paddingBottom;
    this.input.paddingLeft = this.paddingLeft;
    this.input.paddingRight = this.paddingRight;
    this.input.color = this.color;
    this.input.text = this.value;
    this.input.background = this.background;
    this.input.focusedBackground = this.focusedBackground;
    this.input.placeholderText = this.placeholderText;
    this.input.thickness = this.thickness;
    this.input.onTextChangedObservable.add(this.inputHandler);
    this.$container2D.texture.addControl(this.input);
  }

  inputHandler(event) {
    this.$emit('input', event.text);
  }
}

export default OneInput;
</script>

<style type="text/scss" lang="scss">
</style>
