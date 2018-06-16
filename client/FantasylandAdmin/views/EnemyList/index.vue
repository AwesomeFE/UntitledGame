<template>
  <div class="enemy-list">
    <vPageHeader></vPageHeader>
    <vSidebar></vSidebar>
    
    <PageBody>
      <Box>
        <BoxHeader>{{$t('enemyList')}}</BoxHeader>
        <BoxBody>
          <DataTable :isShowPaginaton="false">
            <TableHeader :headers="headers"></TableHeader>
            <TableRow v-for="tableRow in tableRows" :key="tableRow.no" :row="tableRow">
              <!-- <TableAction></TableAction> -->
            </TableRow>
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

import { UtilTable } from '../../../common/utils';
import { CommonTypes } from '../../types';
import { Enemy } from '../../services';
import vSidebar from '../../components/vSidebar/index.vue';
import vPageHeader from '../../components/vPageHeader/index.vue';
import PageBody from '../../../common/AdminComponents/PageBody/index.vue';
import Box from '../../../common/AdminComponents/Box/index.vue';
import BoxHeader from '../../../common/AdminComponents/BoxHeader/index.vue';
import BoxBody from '../../../common/AdminComponents/BoxBody/index.vue';
import DataTable from '../../../common/AdminComponents/DataTable/index.vue';
import TableHeader from '../../../common/AdminComponents/TableHeader/index.vue';
import TableRow from '../../../common/AdminComponents/TableRow/index.vue';
// import TableAction from '../../../common/AdminComponents/TableAction/index.vue';

const System = namespace('System');

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
    TableRow,
    // TableAction
  }
})
export default class EnemyList extends Vue {
  headers = [
    { key: 'no', title: '#' },
    { key: '_id', title: 'id' },
    { key: 'name', title: '名称' },
    { key: 'action', title: '操作', sortable: false}
  ];

  tableRows: CommonTypes.Utils.DataTable.Rows = [];

  async fetchNextPage() {
    const { data = [] } = await Enemy.getEnemy();
    const newTableRows = UtilTable.getTableRows(this.headers, data);

    newTableRows.forEach((tableRow) => this.tableRows.push(tableRow));
  }

  async mounted() {
    await this.fetchNextPage();
  }
}
</script>

<style type="text/scss" lang="scss">
// .enemy-list {

// }
</style>
