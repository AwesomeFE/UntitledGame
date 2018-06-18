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
            <TableRow v-for="row in rows" :key="row._id" :row="row" :headers="headers">
              <SmartButton class="btn-primary" :to="linkUrls.ENEMY_EDIT(row._id)">
                <i class="fa fa-pencil"></i>
              </SmartButton>
              <SmartButton class="btn-primary">
                <i class="fa fa-trash"></i>
              </SmartButton>
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

import { linkUrls } from '../../constants'
import { CommonTypes, View } from '../../types';
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
import SmartButton from '../../../common/AdminComponents/SmartButton/index.vue';

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
    SmartButton
  }
})
export default class EnemyList extends Vue {
  headers = [
    { key: 'index', title: '#' },
    { key: '_id', title: 'id' },
    { key: 'name', title: '名称' },
    { key: 'action', title: '操作', sortable: false}
  ];

  rows: View.ViewList = [];

  linkUrls = linkUrls;

  async fetchNextPage() {
    const data: View.ViewList = (await Enemy.getEnemy()).data;

    data.forEach((item: View.ListItem, index) => item.index = ++index);

    this.rows = data;
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
