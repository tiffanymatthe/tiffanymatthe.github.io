<template>
  <div class="w-4/5 mx-auto md:w-3/5 flex flex-col h-screen">
    <NavigationBar />
    <div v-for="page in pages" :key="page.title">
      <h1 class="text-5xl pb-3 mt-2 z-10">{{ page.title }}</h1>
    </div>
    <PageFooter />
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  async asyncData ({ $content }) {
    let pages = await $content()
      .only(['title', 'body', 'type'])
      .sortBy('createdAt', 'desc')
      .fetch()
    pages = pages.filter(page => page.title === 'About')
    return {
      pages
    }
  }
}
</script>
