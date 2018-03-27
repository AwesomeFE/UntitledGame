<template>
  <form class="FormSignIn">
    <h1 class="FormSignIn__title">{{$t('FormSignIn.title')}}</h1>
    <FormInput
      validate="required"
      name="username"
      type="text"
      v-model="formData.username"
      :placeholder="$t('FormSignIn.username.placeholder')"
    />
    <FormInput
      validate="required"
      name="password"
      type="password"
      v-model="formData.password"
      :placeholder="$t('FormSignIn.password.placeholder')"
    />
    <button type="button" @click="handleSubmit">
      {{$t('FormSignIn.submit')}}
    </button>
  </form>
</template>

<script>
import { Vue } from '../../common';
import FormInput from '../FormInput';
import { Component } from 'vue-property-decorator';

@Component({
  components: {
    FormInput
  }
})
class FormSignIn extends Vue {
  formData = {
    username: '',
    password: ''
  };

  disabled = false;

  async handleSubmit() {
    const isFormValid = await this.$validator.validateAll();

    if(isFormValid) {
      try {
        this.disableFrom();
        await this.$store.dispatch('user/signin', this.formData);

      } catch(e) {
        this.enableFrom();
      }
    }
  }

  disableFrom() {
    this.disabled = true;
  }

  enableFrom() {
    this.disabled = false;
  }
}

export default FormSignIn;
</script>

<style type="text/scss" lang="scss">
.FormSignIn {
  display: block;
  .FormSignIn__title {

  }
}
</style>