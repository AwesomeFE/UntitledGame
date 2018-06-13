<template>
  <div class="home">
    <vPageHeader></vPageHeader>
    <vSidebar></vSidebar>
    
    <PageBody>
      Home
    </PageBody>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { namespace } from 'vuex-class';
import { Component } from 'vue-property-decorator';

import vSidebar from '../../components/vSidebar/index.vue';
import vPageHeader from '../../components/vPageHeader/index.vue';
import PageBody from '../../../common/AdminComponents/PageBody/index.vue';

const System = namespace('system');

@Component({
  components: {
    vPageHeader,
    vSidebar,
    PageBody
  }
})
export default class Home extends Vue {
}
</script>

<style type="text/scss" lang="scss">
// .home {

// }
</style>
