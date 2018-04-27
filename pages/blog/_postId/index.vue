<template>
  <div id="post" v-editable="blok">
    <div class="post-thumbnail"
      :style="{backgroundImage: 'url(' + image + ')'}">
    </div>
    <h1>{{ title }}</h1>
    <p>{{ content }}</p>
  </div>
</template>

<script>
  export default {
    asyncData(context) {
      return context.app.$storyapi.get('cdn/stories/blog/' + context.params.postId, {
        version: 'draft'
      }).then(res => {
          console.log(res);

          return {
            blok: res.data.story.content,
            title: res.data.story.content.title,
            image: res.data.story.content.thumbnail,
            content: res.data.story.content.content,
          }
      });
    },
    mounted() {
      this.$storyblok.init();
      this.$storyblok.on('change', () => {
         location.reload();
      });
    }
  }
</script>

<style>
  .post-thumbnail {
    width: 100%;
    height: 200px;
    background-size: cover;
    background-position: center center;
  }
</style>
