<template>
  <el-menu class="page-header" mode="horizontal">
    <el-menu-item index="1">{{$t('Logo')}}</el-menu-item>
  </el-menu>
</template>

<script lang="ts">
import Vue from 'vue';
import { Menu, MenuItem, Submenu } from 'element-ui';
import { Component } from 'vue-property-decorator';

@Component({
  components: {
    [Menu.name]: Menu,
    [Submenu.name]: Submenu,
    [MenuItem.name]: MenuItem,
  }
})
class PageHeader extends Vue {
}

export default PageHeader;
</script>

<style type="text/scss" lang="scss">

</style>

<i18n lang="i18n">
"zh-cn":
  "Logo": "光羽游戏控制台——"
</i18n>