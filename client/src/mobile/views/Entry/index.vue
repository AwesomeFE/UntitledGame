<template>
  <div class="Entry">
    <PageHeader></PageHeader>

    <div class="PageBody">
      <div class="Entry__boardcast">Here is Ad.</div>
      <div class="Entry__form">
        <FormSignIn v-show="isSignIn"></FormSignIn>
        <FormSignUp v-show="isSignUp"></FormSignUp>
      </div>
    </div>

    <PageFooter></PageFooter>
  </div>
</template>

<script>
import Vue from 'vue';
import PageHeader from '../../components/PageHeader';
import PageFooter from '../../components/PageFooter';
import { Component } from 'vue-property-decorator';

@Component({
  components: {
    PageHeader,
    PageFooter,
    FormSignIn: () => import('../../components/FormSignIn'),
    FormSignUp: () => import('../../components/FormSignUp')
  }
})
class Entry extends Vue {
  get isSignIn() {
    return this.$route.query.type === 'signin';
  }

  get isSignUp() {
    return this.$route.query.type === 'signup';
  }
}

export default Entry;
</script>

<style type="text/scss" lang="scss">
.Entry {
  .Entry__boardcast {
    float: left;
    width: 50%;
    height: 100%;
  }
  .Entry__form {
    margin-left: 50%;
  }
}
</style>
