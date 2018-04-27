<template>
  <section id="page-about" v-editable="blok">
    <h1>{{ title }}</h1>
    <p>{{ content }}</p>
  </section>
</template>

<script>
  export default {
    asyncData (context) {
        return context.app.$storyapi.get('cdn/stories/about', {
          version: process.env.NODE_ENV == 'production' ? 'published' : 'draft',
        }).then(res => {
          return {
            blok: res.data.story.content,
            title: res.data.story.content.title,
            content: res.data.story.content.Content
          }
        });
    },
    mounted() {
      this.$storyblok.init();
      this.$storyblok.on('change', () => {
        location.reload(true)
      });
    }
  }
</script>
