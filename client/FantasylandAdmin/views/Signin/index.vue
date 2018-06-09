<template>
  <div class="Signin">
    signin
  </div>
</template>

<script>
import Vue from 'vue';
import { namespace } from 'vuex-class';
import { Component } from 'vue-property-decorator';

const System = namespace('system');

@Component
export default class Signin extends Vue {

}
</script>

<style type="text/scss" lang="scss">
.Signin {

}
</style>
