<template>
  <div class="consumable-edit">
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
          <BoxHeader>{{$t('consumableBisic')}}</BoxHeader>
          <BoxBody>
            <div class="col-8">
              <FormInput type="text" name="name" validate="required" v-model="formJson.name" :label="$t('name')" :disabled="isDisabled" />
              <FormInput type="text" name="tip" validate="required" v-model="formJson.tip" :label="$t('tip')" :disabled="isDisabled" />
              <FormInput type="text" name="weight" validate="required" v-model="formJson.weight" :label="$t('weight')" :disabled="isDisabled" />
              <FormInput type="text" name="width" validate="required" v-model="formJson.width" :label="$t('width')" :disabled="isDisabled" />
              <FormInput type="text" name="height" validate="required" v-model="formJson.height" :label="$t('height')" :disabled="isDisabled" />
              <FormInput type="text" name="maxCount" validate="required" v-model="formJson.maxCount" :label="$t('maxCount')" :disabled="isDisabled" />
              <!-- <FormInput type="text" name="buffs" validate="required" v-model="formJson.buffs" :label="$t('buffs')" :disabled="isDisabled" /> -->
              <FormSelect v-model="formJson.buffs">
                <option value="aaa">aaa</option>
                <option value="bbb">bbb</option>
                <option value="ccc">ccc</option>
              </FormSelect>
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
import { Consumable } from '../../services';
import vSidebar from '../../components/vSidebar/index.vue';
import vPageHeader from '../../components/vPageHeader/index.vue';
import PageBody from '../../../common/AdminComponents/PageBody/index.vue';
import Box from '../../../common/AdminComponents/Box/index.vue';
import BoxBody from '../../../common/AdminComponents/BoxBody/index.vue';
import BoxHeader from '../../../common/AdminComponents/BoxHeader/index.vue';
import FormInput from '../../../common/AdminComponents/FormInput/index.vue';
import FormSelect from '../../../common/AdminComponents/FormSelect/index.vue';
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
    FormSelect,
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

  formJson: Models.Consumable.Model = {
    _id: '',
    name: '',
    description: '',
    tip: '',
    weight: 1,
    width: 1,
    height: 1,
    maxCount: 1,
    buffs: [],
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
        ? await Consumable.createConsumable(this.formJson)
        : await Consumable.updateConsumable(this.formJson);

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
      const keys = Object.keys(this.formJson.resources) as Models.Consumable.ResourceKeys[];

      for(const fieldName of keys) {
        this.formJson.resources[fieldName] = url;
      }
    }
  }

  async fetchBuffById(consumableId: string) {
    const data: Models.Consumable.Model = (await Consumable.getConsumableById(consumableId)).data;

    const keys = Object.keys(this.formJson) as Models.Consumable.ModelKeys[];

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
.consumable-edit {
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
