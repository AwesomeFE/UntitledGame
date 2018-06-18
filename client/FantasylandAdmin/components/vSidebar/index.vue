<template>
  <Sidebar>
    <SideItem to="/user">用户列表</SideItem>
    <SideItem to="/enemy">敌人列表</SideItem>
    <SideItem to="/enemy/create">创建敌人</SideItem>
    <SideItem to="/buff">状态列表</SideItem>
    <SideItem to="/buff/create">创建状态</SideItem>
    <SideItem to="/consumable">消耗品列表</SideItem>
    <SideItem to="/consumable/create">创建消耗品</SideItem>
    <SideItem>副本列表</SideItem>
    <SideItem>物品列表</SideItem>
  </Sidebar>
</template>

<script lang="ts">
import Vue from 'vue';
import { namespace } from 'vuex-class';
import { Component } from 'vue-property-decorator';

import Sidebar from '../../../common/AdminComponents/Sidebar/index.vue';
import SideItem from '../../../common/AdminComponents/SideItem/index.vue';

const System = namespace('system');

@Component({
  components: {
    Sidebar,
    SideItem
  }
})
export default class vSidebar extends Vue {
}
</script>

<style type="text/scss" lang="scss">
</style>
