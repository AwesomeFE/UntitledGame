<template>
  <form class="FormSignUp">
    <h1 class="FormSignUp__title">{{$t('FormSignUp.title')}}</h1>
    <FormInput
      validate="required"
      name="username"
      type="text"
      v-model="formData.username"
      :placeholder="$t('FormSignUp.username.placeholder')"
    />
    <FormInput
      validate="required"
      name="password"
      type="password"
      v-model="formData.password"
      :placeholder="$t('FormSignUp.password.placeholder')"
    />
    <button type="button" @click="handleSubmit">
      {{$t('FormSignUp.submit')}}
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
class FormSignUp extends Vue {
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
        await this.$store.dispatch('system/signup', this.formData);

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

export default FormSignUp;
</script>

<style type="text/scss" lang="scss">
.FormSignUp {
}
</style>
