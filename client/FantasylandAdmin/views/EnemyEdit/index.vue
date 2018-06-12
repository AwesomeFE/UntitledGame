<template>
  <div class="enemy-edit">
    <vPageHeader></vPageHeader>
    <vSidebar></vSidebar>
    
    <PageBody>
      <form>
        <div class="form-actions">
          <div class="left"></div>
          <div class="right">
            <FormButton class="btn-primary">{{$t('cancel')}}</FormButton>
            <FormButton class="btn-primary" @click="submit">{{$t('submit')}}</FormButton>
          </div>
          <div class="clear-fix"></div>
        </div>

        <Box>
          <BoxHeader>{{$t('enemyBisic')}}</BoxHeader>
          <BoxBody>
            <div class="col-8">
              <FormInput type="text" name="name" validate="required" v-model="formData.name" :label="$t('name')" :disabled="isDisabled" />
              <FormInput type="text" name="gender" validate="required" v-model="formData.gender" :label="$t('gender')" :disabled="isDisabled" />
              <FormInput type="text" name="XP" validate="required" v-model="formData.XP" :label="$t('XP')" :disabled="isDisabled" />
              <FormInput type="text" name="HP" validate="required" v-model="formData.HP" :label="$t('HP')" :disabled="isDisabled" />
              <FormInput type="text" name="MP" validate="required" v-model="formData.MP" :label="$t('MP')" :disabled="isDisabled" />
            </div>

            <div class="col-4 image-gallery">
              <Swiper>
                <div class="swiper-slide" v-for="(file, field) in fieldFileMap" :key="field">
                  <ImagePreview :src="formData[field]" :file="fieldFileMap[field]" />
                  <UploadButton :name="field" v-model="fieldFileMap[field]">{{$t('upload')}}</UploadButton>
                </div>
              </Swiper>
            </div>

            <div class="col-12">
              <FormInput type="text" name="description" validate="required" v-model="formData.description" :label="$t('description')" :disabled="isDisabled" />
            </div>
            <div class="clear-fix"></div>
          </BoxBody>
        </Box>

        <Box>
          <BoxHeader>{{$t('enemyAbility')}}</BoxHeader>
          <BoxBody>
            <FormInput type="text" name="STR" validate="required" v-model="formData.ability.STR" :label="$t('STR')" :disabled="isDisabled" />
            <FormInput type="text" name="AGI" validate="required" v-model="formData.ability.AGI" :label="$t('AGI')" :disabled="isDisabled" />
            <FormInput type="text" name="VIT" validate="required" v-model="formData.ability.VIT" :label="$t('VIT')" :disabled="isDisabled" />
            <FormInput type="text" name="INT" validate="required" v-model="formData.ability.INT" :label="$t('INT')" :disabled="isDisabled" />
            <FormInput type="text" name="DEX" validate="required" v-model="formData.ability.DEX" :label="$t('DEX')" :disabled="isDisabled" />
            <FormInput type="text" name="LUK" validate="required" v-model="formData.ability.LUK" :label="$t('LUK')" :disabled="isDisabled" />
          </BoxBody>
        </Box>
      </form>
    </PageBody>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { namespace } from 'vuex-class';
import { Component } from 'vue-property-decorator';

import { FormData } from '../../types/index.d';
import { Enemy } from '../../services';
import vSidebar from '../../components/vSidebar/index.vue';
import vPageHeader from '../../components/vPageHeader/index.vue';
import PageBody from '../../../common/AdminComponents/PageBody/index.vue';
import Box from '../../../common/AdminComponents/Box/index.vue';
import BoxBody from '../../../common/AdminComponents/BoxBody/index.vue';
import BoxHeader from '../../../common/AdminComponents/BoxHeader/index.vue';
import FormInput from '../../../common/AdminComponents/FormInput/index.vue';
import FormImage from '../../../common/AdminComponents/FormImage/index.vue';
import FormButton from '../../../common/AdminComponents/FormButton/index.vue';
import Swiper from '../../../common/AdminComponents/Swiper/index.vue';
import ImagePreview from '../../../common/AdminComponents/ImagePreview/index.vue';
import UploadButton from '../../../common/AdminComponents/UploadButton/index.vue';

const System = namespace('system');

@Component({
  components: {
    vPageHeader,
    vSidebar,
    PageBody,
    Box,
    BoxBody,
    BoxHeader,
    FormInput,
    FormImage,
    FormButton,
    Swiper,
    ImagePreview,
    UploadButton,
  }
})
export default class EnemyEdit extends Vue {
  isDisabled = false;

  formData = {
    name: '',
    gender: 'male',
    XP: 0,
    HP: 1,
    MP: 1,
    ability: {
      STR: 1,
      AGI: 1,
      VIT: 1,
      INT: 1,
      DEX: 1,
      LUK: 1,
    },
    standing2D: '',
    attack2D: ''
  };

  fieldFileMap: FormData.FieldFile = {
    standing2D: null,
    attack2D: null
  };

  submit() {
  }

  async fetchEnemyById(enemyId: string) {
    // const { data = [] } = await Enemy.getEnemyById(enemyId);
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
