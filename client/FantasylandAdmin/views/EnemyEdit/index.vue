<template>
  <div class="enemy-edit">
    <vPageHeader></vPageHeader>
    <vSidebar></vSidebar>
    
    <PageBody>
      <form>
        <div class="form-actions">
          <div class="left"></div>
          <div class="right">
            <SmartButton class="btn-primary">{{$t('cancel')}}</SmartButton>
            <SmartButton class="btn-primary" @click="submit" :disabled="isDisabled">{{$t('submit')}}</SmartButton>
          </div>
          <div class="clear-fix"></div>
        </div>

        <Box>
          <BoxHeader>{{$t('enemyBisic')}}</BoxHeader>
          <BoxBody>
            <div class="col-8">
              <FormInput type="text" name="name" validate="required" v-model="formJson.name" :label="$t('name')" :disabled="isDisabled" />
              <FormInput type="text" name="gender" validate="required" v-model="formJson.gender" :label="$t('gender')" :disabled="isDisabled" />
              <FormInput type="text" name="XP" validate="required" v-model="formJson.XP" :label="$t('XP')" :disabled="isDisabled" />
              <FormInput type="text" name="HP" validate="required" v-model="formJson.HP" :label="$t('HP')" :disabled="isDisabled" />
              <FormInput type="text" name="MP" validate="required" v-model="formJson.MP" :label="$t('MP')" :disabled="isDisabled" />
            </div>

            <div class="col-4 image-gallery">
              <Swiper>
                <div class="swiper-slide" v-for="(file, field) in fieldFiles" :key="field">
                  <ImagePreview :src="formJson[field]" :file="fieldFiles[field]" />
                  <UploadButton :name="field" v-model="fieldFiles[field]">{{$t('upload')}}</UploadButton>
                </div>
              </Swiper>
            </div>

            <div class="col-12">
              <FormInput type="text" name="description" validate="required" v-model="formJson.description" :label="$t('description')" :disabled="isDisabled" />
            </div>
            <div class="clear-fix"></div>
          </BoxBody>
        </Box>

        <Box>
          <BoxHeader>{{$t('enemyAbility')}}</BoxHeader>
          <BoxBody>
            <FormInput type="text" name="STR" validate="required" v-model="formJson.STR" :label="$t('STR')" :disabled="isDisabled" />
            <FormInput type="text" name="AGI" validate="required" v-model="formJson.AGI" :label="$t('AGI')" :disabled="isDisabled" />
            <FormInput type="text" name="VIT" validate="required" v-model="formJson.VIT" :label="$t('VIT')" :disabled="isDisabled" />
            <FormInput type="text" name="INT" validate="required" v-model="formJson.INT" :label="$t('INT')" :disabled="isDisabled" />
            <FormInput type="text" name="DEX" validate="required" v-model="formJson.DEX" :label="$t('DEX')" :disabled="isDisabled" />
            <FormInput type="text" name="LUK" validate="required" v-model="formJson.LUK" :label="$t('LUK')" :disabled="isDisabled" />
          </BoxBody>
        </Box>
      </form>
    </PageBody>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { namespace } from 'vuex-class';
import { Validator } from 'vee-validate';
import { Component, Inject } from 'vue-property-decorator';

import { Models, CommonTypes } from '../../types';
import { Enemy } from '../../services';
import vSidebar from '../../components/vSidebar/index.vue';
import vPageHeader from '../../components/vPageHeader/index.vue';
import PageBody from '../../../common/AdminComponents/PageBody/index.vue';
import Box from '../../../common/AdminComponents/Box/index.vue';
import BoxBody from '../../../common/AdminComponents/BoxBody/index.vue';
import BoxHeader from '../../../common/AdminComponents/BoxHeader/index.vue';
import FormInput from '../../../common/AdminComponents/FormInput/index.vue';
import SmartButton from '../../../common/AdminComponents/SmartButton/index.vue';
import Swiper from '../../../common/AdminComponents/Swiper/index.vue';
import ImagePreview from '../../../common/AdminComponents/ImagePreview/index.vue';
import UploadButton from '../../../common/AdminComponents/UploadButton/index.vue';
import { UtilFormFile } from '../../../common/utils';
import { modalTypes, linkUrls } from '../../constants';

const Modal = {
  UploadModal: namespace('Modal/UploadModal')
};

@Component({
  components: {
    vPageHeader,
    vSidebar,
    PageBody,
    Box,
    BoxBody,
    BoxHeader,
    FormInput,
    SmartButton,
    Swiper,
    ImagePreview,
    UploadButton,
  }
})
export default class EnemyEdit extends Vue {
  @Inject('$validator') $validator: Validator;

  @Modal.UploadModal.Mutation('show')
  showUploadModal: () => void;

  @Modal.UploadModal.Mutation('hide')
  hideUploadModal: () => void;

  @Modal.UploadModal.Action('uploadFiles')
  uploadFiles: (payload: Array<FormData>) => Array<any>;
  
  isDisabled: boolean = false;

  formJson: Models.Enemy.Model = {
    _id: '',
    name: '',
    gender: 'male',
    description: '',
    XP: 0,
    HP: 1,
    MP: 1,
    STR: 1,
    AGI: 1,
    VIT: 1,
    INT: 1,
    DEX: 1,
    LUK: 1,
    standing2D: '',
    attack2D: ''
  };

  fieldFiles: CommonTypes.Utils.FormFile.FieldFiles = {
    standing2D: null,
    attack2D: null
  };

  async submit() {
    const { enemyId } = this.$route.params;

    this.disableForm();

    if(await this.$validator.validateAll()) {
      const fileArray = UtilFormFile.getFileArrayFromFieldFiles(this.fieldFiles, 'enemy');

      this.showUploadModal();
      const results = await this.uploadFiles(fileArray);
      this.setUrl2FormJson(results.map(({ data }) => data));
      
      !enemyId
        ? await Enemy.createEnemy(this.formJson)
        : await Enemy.updateEnemy(this.formJson);

      this.hideUploadModal();

      this.$router.push(linkUrls.ENEMY_LIST());
    } else {
      this.enableForm();
    }
  }

  setUrl2FormJson(urls: Array<string>) {
    for(const url of urls) {
      const keys = Object.keys(this.fieldFiles) as Models.Enemy.ResourceKeys[];

      for(const fieldName of keys) {
        this.formJson[fieldName] = `/${url}`;
      }
    }
  }

  async fetchEnemyById(enemyId: string) {
    const data: Models.Enemy.Model = (await Enemy.getEnemyById(enemyId)).data;

    const keys = Object.keys(this.formJson) as Models.Enemy.ModelKeys[];

    for(const key of keys) {
      this.formJson[key] = data[key];
    }
  }

  disableForm() {
    this.isDisabled = true;
  }

  enableForm() {
    this.isDisabled = false;
  }

  async mounted() {
    const { enemyId } = this.$route.params;

    if(enemyId) {
      await this.fetchEnemyById(enemyId);
    }
  }
}
</script>

<style type="text/scss" lang="scss">
.enemy-edit {
  .form-actions {
    margin-bottom: 15px;
  }
  .image-gallery {
    padding: 10px;
    height: 380px;
    box-sizing: border-box;
    position: relative;
  }
  .swiper-slide {
    text-align: center;
  }
  .upload-button {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  .image-preview {
    height: 320px;
  }
}
</style>
