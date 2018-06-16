<template>
  <div class="not-found">
    not-found
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { namespace } from 'vuex-class';
import { Component } from 'vue-property-decorator';

@Component
export default class NotFound extends Vue {
}
</script>

<style type="text/scss" lang="scss">
.not-found {

}
</style>
