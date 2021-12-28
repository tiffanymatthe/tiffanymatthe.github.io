<template>
  <div class="w-4/5 mx-auto md:w-3/5 flex flex-col h-screen" id="top">
    <NavigationBar />
    <MainHero />
    <WorkExperience />
    <FeaturedProjects :posts="projects" />
    <PageFooter />
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
    return { projects }
  }
}
</script>
