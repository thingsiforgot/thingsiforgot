<template>
  <section id="page-home">
    <PostPreview
      v-for="post in posts"
      :key="post.id"
      :id="post.id"
      :title="post.title"
      :excerpt="post.previewText"
      :thumbnailImage="post.thumbnailUrl"
    />
  </section>
</template>

<script>
  import PostPreview from '@/components/Blog/PostPreview';

  export default {
    components: {
      PostPreview
    },
    asyncData(context) {
      return context.app.$storyapi.get('cdn/stories', {
        version: process.env.NODE_ENV == 'production' ? 'published' : 'draft',
        starts_with: 'blog/'
      }).then(res => {
        return {
          posts: res.data.stories.map(bp => {
              return {
                id: bp.slug,
                title: bp.content.title,
                previewText: bp.content.summary,
                thumbnailUrl: bp.content.thumbnail
              };
            }
          )
        };
      });
    }
    /*
    data() {
      return {
        posts: [
          {
            title: 'A new beginning',
            previewText: 'This will be awesome, don\'t miss it',
            thumbnailUrl: 'https://picsum.photos/500/300?1',
            id: 'a-new-beginning'
          },

          {
            title: 'A second beginning',
            previewText: 'This will be awesome, don\'t miss it',
            thumbnailUrl: 'https://picsum.photos/500/300?2',
            id: 'a-second-beginning'
          }
        ]
      }
    }
    */
  }
</script>

<style scoped>
#page-home {
  padding-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 35rem) {
  #page-home {
    flex-direction: row;
  }
}
</style>
