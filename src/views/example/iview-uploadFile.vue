<!-- eslint-disable -->
<template>
  <div>
    <p>iveiw 上传多文件只请求一次ajax</p>
    <p>项目没引入iview,暂时无法使用</p>
    <router-link to="/">返回目录</router-link>
    <Form :model="formData" :label-width="80">
      <FormItem class="upload" label="上传文件">
        <Upload
          :before-upload="handleUpload"
          :action="''"
          :multiple="true"
        >
          <Button icon="ios-cloud-upload-outline">请选择附件</Button>
        </Upload>
        <!-- 进度条 -->
        <Progress v-if="upload.fileProgressShow" :percent="upload.fileProgress" />
        <!-- 显示列表 -->
        <ul>
          <li
            v-for="(item, index) of formData.dispalyFile"
            :key="index"
          >
            <span>{{ item.name }}</span>
            <Icon type="md-close" @click="handleRemove(index)" />
          </li>
        </ul>
      </FormItem>
    </Form>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios';
export default {
  data() {
    return {
      formData: {
        dispalyFile: [] // 临时数组，同时用于显示在页面
      },
      // 上传配置
      upload: {
        look: true, // 控制多文件上传，只触发一次ajax请求
        fileProgressShow: false, // 进度条
        fileProgress: 0 // 进度条进度
      }
    };
  },
  methods: {
    handleUpload(selectFile) {
      // 临时数组，同时用于显示在页面
      this.formData.dispalyFile.push(selectFile)
      // 控制多文件上传，只触发一次ajax请求
      if (this.upload.look) {
        this.upload.look = false;
        // 延迟请求，等待所有文件都从本地读取完毕
        setTimeout(() => {
          let formData = new FormData();
          this.formData.dispalyFile.map(item => {
            // files为后台接收参数
            // []为多文件数组
            formData.append('files[]', item);
          })
          axios.request({
            url: '/upload',
            method: 'post',
            data: formData,
            headers: { 'Content-Type': 'multipart/form-data' },
            onUploadProgress: (progressEvent) => {
              // 用于上传过程中显示进度条
              if (progressEvent.lengthComputable) {
                // 显示进度条
                this.upload.fileProgressShow = true;
                let curValue = (progressEvent.loaded / progressEvent.total * 100).toFixed(0);
                this.upload.fileProgress = parseInt(curValue);
              }
            }
          })
            .then(res => {
              // 上传成功处理
              // 隐藏进度条
              this.upload.fileProgressShow = false;
            })
            .catch(() => {
              // 上传失败处理
              // 隐藏进度条
              this.upload.fileProgressShow = false;
            })
        }, 50);
      }
      return false;
    }
  }
};
</script>

<style scoped>
.upload {
  width: 40%;
}
</style>
