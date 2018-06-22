<template>
  <div class="dungeon-edit">
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
          <BoxHeader>主线副本</BoxHeader>
          <BoxBody>
            <FormInput type="text" name="name" validate="required" v-model="formJson.name" :label="$t('name')" :disabled="isDisabled" />
            <SmartButton class="btn-primary" @click="createChapter" :disabled="isDisabled">创建章节</SmartButton>
          </BoxBody>
        </Box>

        <Box v-if="formJson.chapters.length" v-for="(chapter, index) in formJson.chapters" :key="`chapter_${index}`">
          <BoxHeader>副本章节 - {{index}}</BoxHeader>

          <BoxBody>
            <FormInput type="text" :name="`chapter_${index}_name`" validate="required" v-model="chapter.name" :label="$t('name')" :disabled="isDisabled" />
            <FormSelect v-model="chapter.items" placeholder="请选择" label="章节奖励道具">
              <FormOption v-for="item of itemList" :value="item._id" :key="item._id" :selected="chapter.items.includes(item._id)">{{item.name}}</FormOption>
            </FormSelect>

            <SmartButton class="btn-primary" @click="createDungeonStory(chapter)" :disabled="isDisabled">创建副本故事</SmartButton>
            <SmartButton class="btn-primary" @click="createDungeonBattle(chapter)" :disabled="isDisabled">创建副本战斗</SmartButton>
          </BoxBody>

          <BoxHeader>章节 - {{index}}</BoxHeader>
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

import * as data from './data';
import { Models, CommonTypes, View } from '../../types';
import { Dungeon, Consumable } from '../../services';
import vSidebar from '../../components/vSidebar/index.vue';
import vPageHeader from '../../components/vPageHeader/index.vue';
import PageBody from '../../../common/AdminComponents/PageBody/index.vue';
import Box from '../../../common/AdminComponents/Box/index.vue';
import BoxBody from '../../../common/AdminComponents/BoxBody/index.vue';
import BoxHeader from '../../../common/AdminComponents/BoxHeader/index.vue';
import FormInput from '../../../common/AdminComponents/FormInput/index.vue';
import FormSelect from '../../../common/AdminComponents/FormSelect/index.vue';
import FormOption from '../../../common/AdminComponents/FormOption/index.vue';
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
    FormSelect,
    FormOption,
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

  @Modal.UploadModal.Mutation('clearUpload')
  clearUpload: () => void;
  
  isDisabled: boolean = false;

  itemList = data.itemList;
  formJson = data.formJson;
  fieldFiles = data.fieldFiles;

  createChapter() {
    this.formJson.chapters.push(data.newChapter);
  }

  createDungeonStory(chapter: Models.Dungeon.Chapter) {
    chapter.dungeons.push(data.newDungeonStory);
  }

  createDungeonBattle(chapter: Models.Dungeon.Chapter) {
    chapter.dungeons.push(data.newDungeonBattle);
  }

  async submit() {
    const { enemyId } = this.$route.params;

    this.disableForm();

    if(await this.$validator.validateAll()) {
      const fileArray = UtilFormFile.getFileArrayFromFieldFiles(this.fieldFiles, 'enemy');

      if(fileArray.length) {
        this.showUploadModal();
        const results = await this.uploadFiles(fileArray);
      }
      
      !enemyId
        ? await Dungeon.createDungeon(this.formJson)
        : await Dungeon.updateDungeon(this.formJson);

      if(fileArray.length) {
        this.hideUploadModal();
        this.clearUpload();
      }

      this.$router.push(linkUrls.ENEMY_LIST());
    } else {
      this.enableForm();
    }
  }

  async fetchItemList() {
    const data: View.ViewList = (await Consumable.getConsumable()).data;

    data.forEach((item: View.ListItem, index) => {
      item.index = ++index;
      this.itemList.push(item);
    });
  }

  async fetchDungeonById(id: string) {
    const data: Models.Dungeon.Model = (await Dungeon.getDungeonById(id)).data;

    const keys = Object.keys(this.formJson) as Models.Dungeon.ModelKeys[];

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
    const { dungeonId } = this.$route.params;

    await this.fetchItemList();

    if(dungeonId) {
      await this.fetchDungeonById(dungeonId);
    }
  }
}
</script>

<style type="text/scss" lang="scss">
.dungeon-edit {
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
