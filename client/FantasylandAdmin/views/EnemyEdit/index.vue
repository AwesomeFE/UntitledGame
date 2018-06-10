<template>
  <div class="enemy-edit">
    <vPageHeader></vPageHeader>
    <vSidebar></vSidebar>
    
    <PageBody>
      <Box>
        <BoxHeader>{{$t('enemyEdit')}}</BoxHeader>
        <BoxBody>
        </BoxBody>
      </Box>
    </PageBody>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { namespace } from 'vuex-class';
import { Component } from 'vue-property-decorator';

import { Enemy } from '../../services';
import vSidebar from '../../components/vSidebar/index.vue';
import vPageHeader from '../../components/vPageHeader/index.vue';
import PageBody from '../../../common/AdminComponents/PageBody/index.vue';
import Box from '../../../common/AdminComponents/Box/index.vue';
import BoxHeader from '../../../common/AdminComponents/BoxHeader/index.vue';
import BoxBody from '../../../common/AdminComponents/BoxBody/index.vue';

const System = namespace('system');

@Component({
  components: {
    vPageHeader,
    vSidebar,
    PageBody,
    Box,
    BoxHeader,
    BoxBody,
  }
})
export default class EnemyEdit extends Vue {
  async fetchEnemyById(enemyId: string) {
    // const { data = [] } = await Enemy.getEnemyById(enemyId);
  }

  async mounted() {
    const { enemyId } = this.$route.params;

    if(enemyId) {
      await this.fetchEnemyById(enemyId);
    }
  }
}
</script>

<style type="text/scss" lang="scss">
.enemy-edit {

}
</style>
