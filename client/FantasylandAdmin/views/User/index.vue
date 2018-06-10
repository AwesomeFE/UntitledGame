<template>
  <div class="user">
    <vPageHeader></vPageHeader>
    <vSidebar></vSidebar>
    <div>
      User
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { namespace } from 'vuex-class';
import { Component } from 'vue-property-decorator';

import vPageHeader from '../../components/vPageHeader/index.vue';
import vSidebar from '../../components/vSidebar/index.vue';

const System = namespace('system');

@Component({
  components: {
    vPageHeader,
    vSidebar
  }
})
export default class Home extends Vue {
}
</script>

<style type="text/scss" lang="scss">
.home {

}
</style>
