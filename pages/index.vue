<template>
  <div class="w-4/5 mx-auto md:w-3/5 flex flex-col h-screen" id="top">
    <NavigationBar />
    <MainHero />
    <WorkExperience />
    <FeaturedProjects :posts="objects[0]" />
    <PageFooter />
    <div>
      <!-- hidden on purpose, just for link rendering -->
      <div v-for="post in objects[1]" :key="post.title">
        <NuxtLink :to="`${post.slug}`">{{post.title}}</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  async asyncData ({ $content }) {
    const projects = await $content('projects', { deep: true })
      .only(['title', 'image', 'tags', 'slug', 'color', 'titleColor', 'type', 'year'])
      .sortBy('year', 'desc')
      .fetch()
    const postss = await $content('posts', { deep: true })
      .only(['title', 'slug'])
      .fetch()
    const objects = [projects, postss]
    return { objects }
  }
}
</script>
