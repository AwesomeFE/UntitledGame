<template>
  <div class="buff-edit">
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
          <BoxHeader>{{$t('buffBisic')}}</BoxHeader>
          <BoxBody>
            <div class="col-8">
              <FormInput type="text" name="name" validate="required" v-model="formJson.name" :label="$t('name')" :disabled="isDisabled" />
              <FormInput type="text" name="tip" validate="required" v-model="formJson.tip" :label="$t('tip')" :disabled="isDisabled" />
              <FormInput type="text" name="recover" validate="required" v-model="formJson.recover" :label="$t('recover')" :disabled="isDisabled" />
              <FormInput type="text" name="total" validate="required" v-model="formJson.total" :label="$t('total')" :disabled="isDisabled" />
              <FormInput type="text" name="isIncrease" validate="required" v-model="formJson.isIncrease" :label="$t('isIncrease')" :disabled="isDisabled" />
              <FormInput type="text" name="maintain" validate="required" v-model="formJson.maintain" :label="$t('maintain')" :disabled="isDisabled" />
            </div>

            <div class="col-4 image-gallery">
              <Swiper>
                <div class="swiper-slide" v-for="(file, field) in fieldFiles" :key="field">
                  <ImagePreview :src="formJson.resources[field]" :file="fieldFiles[field]" />
                  <div>{{field}}</div>
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
import { Buff } from '../../services';
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
export default class BuffEdit extends Vue {
  @Inject('$validator') $validator: Validator;

  @Modal.UploadModal.Mutation('show')
  showUploadModal: () => void;

  @Modal.UploadModal.Mutation('hide')
  hideUploadModal: () => void;

  @Modal.UploadModal.Action('uploadFiles')
  uploadFiles: (payload: Array<FormData>) => Array<any>;
  
  isDisabled: boolean = false;

  formJson: Models.Buff.Model = {
    _id: '',
    name: '',
    description: '',
    tip: '',
    recover: 'HP',
    total: 1,
    isIncrease: false,
    maintain: 1000,
    resources: {
      thumbnail: ''
    }
  };

  fieldFiles: CommonTypes.Utils.FormFile.FieldFiles = {
    thumbnail: null
  };

  async submit() {
    const { buffId } = this.$route.params;

    this.disableForm();

    if(await this.$validator.validateAll()) {
      const fileArray = UtilFormFile.getFileArrayFromFieldFiles(this.fieldFiles, 'buff');

      if(fileArray.length) {
        this.showUploadModal();
        const results = await this.uploadFiles(fileArray);
        this.setUrl2FormJson(results.map(({ data }) => data));
      }
      
      !buffId
        ? await Buff.createBuff(this.formJson)
        : await Buff.updateBuff(this.formJson);

      if(fileArray.length) {
        this.hideUploadModal();
      }

      this.$router.push(linkUrls.BUFF_LIST());
    } else {
      this.enableForm();
    }
  }

  setUrl2FormJson(urls: Array<string>) {
    for(const url of urls) {
      const keys = Object.keys(this.formJson.resources) as Models.Buff.ResourceKeys[];

      for(const fieldName of keys) {
        this.formJson.resources[fieldName] = url;
      }
    }
  }

  async fetchBuffById(buffId: string) {
    const data: Models.Buff.Model = (await Buff.getBuffById(buffId)).data;

    const keys = Object.keys(this.formJson) as Models.Buff.ModelKeys[];

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
    const { buffId } = this.$route.params;

    if(buffId) {
      await this.fetchBuffById(buffId);
    }
  }
}
</script>

<style type="text/scss" lang="scss">
.buff-edit {
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
