<template>
</template>

<script>
import Babylon from '../common/Babylon';
import GUI from 'babylonjs-gui';
import { Component } from 'vue-property-decorator';

@Component({
  inject: [
    '$container2D'
  ],
  props: {
    name: String,
    text: String,
    horizontalAlignment: Number,
    verticalAlignment: Number,
    width: {
      type: String,
      default: '20%'
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
class OneButton extends Babylon {
  button = null;

  mounted() {
    this.button = new GUI.Button.CreateSimpleButton(this.name, this.text);
    this.button.width = this.width;
    this.button.height = this.height;
    this.button.color = this.color;
    this.button.background = this.background;
    this.button.verticalAlignment = this.verticalAlignment;
    this.button.horizontalAlignment = this.horizontalAlignment;
    this.button.paddingRight = this.paddingRight;
    this.button.paddingBottom = this.paddingBottom;
    this.button.paddingLeft = this.paddingLeft;
    this.button.paddingRight = this.paddingRight;
    console.log(this.button.onPointerClickObservable)
    this.button.onPointerDownObservable.add(function() {
      alert('123')
    });
    // this.button.onPointerDownObservable.add(function() {
    //   alert('123')
    // });
    this.$container2D.texture.addControl(this.button);
  }
}

export default OneButton;
</script>

<style type="text/scss" lang="scss">
</style>
