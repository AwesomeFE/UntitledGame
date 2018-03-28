<template>
</template>

<script>
import Vue from 'vue';
import { Button } from 'babylonjs-gui';
import { Component } from 'vue-property-decorator';

@Component({
  inject: [
    '$container2D'
  ],
  props: {
    name: {
      type: String
    },
    text: {
      type: String
    },
    imageUrl: {
      type: String
    },
    horizontalAlignment: {
      type: Number
    },
    verticalAlignment: {
      type: Number
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '40px'
    },
    color: {
      type: String,
      default: 'white'
    },
    background: {
      type: String,
      default: 'green'
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
    }
  }
})
class OneButton extends Vue {
  button = null;

  mounted() {
    this.button = new Button.CreateImageButton(this.name, this.text, this.imageUrl);
    this.button.width = this.width;
    this.button.height = this.height;
    this.button.color = this.color;
    // this.button.background = this.background;
    this.button.verticalAlignment = this.verticalAlignment;
    this.button.horizontalAlignment = this.horizontalAlignment;
    this.button.paddingRight = this.paddingRight;
    this.button.paddingBottom = this.paddingBottom;
    this.button.paddingLeft = this.paddingLeft;
    this.button.paddingRight = this.paddingRight;
    this.$container2D.texture.addControl(this.button);
  }
}

export default OneButton;
</script>

<style type="text/scss" lang="scss">
</style>
