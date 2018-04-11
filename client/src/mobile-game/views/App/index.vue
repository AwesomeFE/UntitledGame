<template>
  <div class="App">
    <router-view v-if="isSystemPerpared"></router-view>
    <div v-else>Loading...</div>
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
class App extends Vue {
  // 系统准备标志位
  isSystemPerpared = false;

  async mounted() {
    await this.$store.dispatch('system/getUser');
    this.isSystemPerpared = true;
    this.setBaseFontSize();

    if(!this.user) {
      return this.$router.push(this.linkUrls.GAME_START_LINK());
    }

    if(this.user && this.$route.path === this.linkUrls.GAME_START_LINK().path) {
      return this.$router.push(this.linkUrls.GAME_PLAYER());
    }
  }

  setBaseFontSize() {
    const baseWidth = 667; // 以iphone7为基础宽度

    document.documentElement.style.fontSize = `${document.body.clientWidth / baseWidth * 100}px`;
  }
}

export default App;
</script>

<style type="text/scss" lang="scss">
@import '../../assets/scss/variable.scss';
body,
html,
#app,
.App,
.Game,
.Scene,
.canvas {
  height: 100%;
  width: 100%;
}
body, html {
  position: fixed;
  touch-action: none;
  overflow: hidden;
}
.App {
  font-size: 0.12rem;
  font-weight: 400;
  .PageBody {
    min-height: $page-min-height;
    padding-bottom: $footer-height;
  }
}
</style>
