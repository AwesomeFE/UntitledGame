<template>
  <div class="enemy-list">
    <vPageHeader></vPageHeader>
    <vSidebar></vSidebar>
    
    <PageBody>
      <Box>
        <BoxHeader>{{$t('enemyList')}}</BoxHeader>
        <BoxBody>
          <DataTable :isShowPaginaton="false">
            <!-- <TableHeader></TableHeader> -->
            <!-- <TableRow></TableRow> -->
          </DataTable>
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
import DataTable from '../../../common/AdminComponents/DataTable/index.vue';
import TableHeader from '../../../common/AdminComponents/TableHeader/index.vue';
// import TableRow from '../../../common/AdminComponents/TableRow/index.vue';

const System = namespace('system');

@Component({
  components: {
    vPageHeader,
    vSidebar,
    PageBody,
    Box,
    BoxHeader,
    BoxBody,
    DataTable,
    TableHeader,
    // TableRow
  }
})
export default class EnemyList extends Vue {
  async mounted() {
    const { data } = await Enemy.getEnemy();

    console.log(data);
  }
}
</script>

<style type="text/scss" lang="scss">
.enemy-list {

}
</style>
