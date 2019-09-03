<template>
  <div class="container pt-5">
    <h3>Add the article</h3>
    <hr>
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label>Author</label>
        <input v-model="post.author" type="text" class="form-control" placeholder="Enter author name...">
      </div>
      <div class="form-group">
        <label>Title</label>
        <input v-model="post.title" type="text" class="form-control" placeholder="Enter the title of the article...">
      </div>
      <div class="form-group">
        <label>Image Url</label>
        <input v-model="post.thumbnail" type="text" class="form-control" placeholder="Enter the image of the article...">
      </div>
      <div class="form-group">
        <label>Preview Text</label>
        <input v-model="post.previewText" type="text" class="form-control" placeholder="Enter the preview text of the article...">
      </div>
      <div class="form-group">
        <label>Text</label>
        <textarea v-model="post.content" cols="30" rows="5" class="form-control"></textarea>
      </div>
      <button @click="$router.push('/')" class="btn btn-danger">Cancel</button>
      <button type="submit" class="btn btn-info aaaa">Save</button>
    </form>
  </div>
</template>
<script>
import axios from 'axios'
import customAxios from '../custom_axios'

  export default {
    data(){
      return {
        post : {
          author : "",
          content : "",
          previewText : "",
          thumbnail : "",
          title : "",
        }
      }
    },
    methods : {
      onSubmit(){
        //spred operator xetasi  {...this.post, updatedDate: new Date()}   //////////////////////////////////////////////////////////////////////////////
        let tmp = this.post;
        tmp.updatedDate = new Date();
       customAxios.post("/posts.json", tmp)
       .then(response => {
         this.post = {}
       })
       .catch(e => console.log(e));
      }
    }
  }
</script>
