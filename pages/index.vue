<template>
  <div class="w-4/5 mx-auto md:w-3/5 flex flex-col h-screen">
    <NavigationBar />
    <MainHero />
    <FeaturedProjects :posts="posts" />
    <WorkExperience />
    <PageFooter />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  async asyncData ({ $content }) {
    const posts = await $content()
      .only(['title', 'image', 'tags', 'slug', 'color', 'titleColor'])
      .sortBy('createdAt', 'desc')
      .fetch()
    console.log('posts', posts)
    return {
      posts
    }
  }
}
</script>
