<template>
  <div class="sign-in">
    <form class="form">
      <header class="form-header">
        <b>Admin</b>
        <span>{{$t('Fantasyland')}}</span>
      </header>

      <section class="form-body">
        <div class="form-message">{{$t(message, { fieldName: $t(fieldName) })}}</div>

        <FormInput type="text" name="username" validate="required" v-model="formData.username" :placeholder="$t('username')" :disabled="isDisabled" />
        <FormInput type="password" name="password" validate="required" v-model="formData.password" :placeholder="$t('password')" :disabled="isDisabled" />

        <div>
          <div class="left">
            remember me
          </div>
          <div class="right">
            <SmartButton class="btn-primary":disabled="isDisabled"@click="submit">{{$t('signin')}}</SmartButton>
          </div>
          <div class="clear-fix"></div>
        </div>
      </section>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { namespace } from 'vuex-class';
import { Component } from 'vue-property-decorator';
import { messageTypes, linkUrls } from '../../constants';
import FormInput from '../../../common/AdminComponents/FormInput/index.vue';
import SmartButton from '../../../common/AdminComponents/SmartButton/index.vue';
import { CommonTypes } from '../../types';

const System = namespace('System');

@Component({
  components: {
    FormInput,
    SmartButton
  }
})
export default class Signin extends Vue {
  message = messageTypes.PLEASE_SIGNIN;
  fieldName = '';

  isDisabled = false;

  formData = {
    username: '',
    password: ''
  };

  @System.Action('signin')
  signin: (formData: CommonTypes.System.Payload.SignIn) => void;

  async submit() {
    this.disableForm();

    if(await this.$validator.validateAll()) {
      try {
        await this.signin(this.formData);
        this.$router.push(linkUrls.HOME());
      } catch(res) {
        this.enableForm();
        this.showMessage(res.type);
      }
    } else {
      this.enableForm();
      this.showMessage();
    }
  }

  disableForm() {
    this.isDisabled = true;
  }

  enableForm() {
    this.isDisabled = false;
  }

  showMessage(msg?: string) {
    const [ errorItem ] = this.$validator.errors.items;

    if(errorItem) {
      this.message = messageTypes.FIELD_REQUIRED;
      this.fieldName = errorItem.field;
    } else if(msg) {
      this.message = msg;
    } else {
      this.message = messageTypes.PLEASE_SIGNIN;
    }
  }
}
</script>

<style type="text/scss" lang="scss">
.sign-in {
  height: 100%;
  background: #d2d6de;

  .form {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -70%);
    width: 360px;
    font-size: 14px;
  }
  .form-header {
    text-align: center;
    margin-bottom: 25px;
    font-size: 28px;
  }
  .form-body {
    padding: 20px;
    background: white;
  }
  .form-message {
    padding: 0 20px 20px 20px;
    text-align: center;
  }
  .btn-primary {
    width: 86px;
    height: 34px;
  }
}
</style>
