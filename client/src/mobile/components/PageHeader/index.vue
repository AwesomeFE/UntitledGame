<template>
  <div class="PageHeader">
    <div class="PageHeader__logo">
      <router-link :to="linkUrls.HOME">{{$t('PageHeader.logo')}}</router-link>
    </div>
    <div class="PageHeader__body">
      <div class="left">
        <span>icon</span>
      </div>
      <div class="right">
        <router-link class="menu" :to="linkUrls.GAME_START_LINK">{{$t('PageHeader.start')}}</router-link>
        <router-link class="menu" :to="linkUrls.SIGNIN" v-if="!user">{{$t('PageHeader.signin')}}</router-link>
        <router-link class="menu" :to="linkUrls.SIGNUP" v-if="!user">{{$t('PageHeader.signup')}}</router-link>
        <a class="menu">{{$t('PageHeader.account')}}</a>
        <a class="menu" v-if="user" @click="signout">{{$t('PageHeader.signout')}}</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { Vue } from '../../common';
import { Component } from 'vue-property-decorator';

@Component({
  computed: {
    ...mapState('system', {
      user: state => state.user
    })
  }
})
class PageHeader extends Vue {
  signout() {
    this.$store.dispatch('system/signout');
  }
}

export default PageHeader;
</script>

<style type="text/scss" lang="scss">
@import '../../assets/scss/variable.scss';

.PageHeader {
  height: $header-height;
  background: #ccc;
  padding: 0 $page-padding-value;
  .PageHeader__logo {
    float: left;
    height: 100%;
    line-height: $header-height;
    margin-right: 10px;
    a {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  .PageHeader__body {
    height: 100%;
    line-height: $header-height;
    .left {
      height: 100%;
      float: left;
    }
    .right {
      height: 100%;
      float: right;
    }
  }
}
</style>