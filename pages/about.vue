<template>
  <div class="w-4/5 mx-auto md:w-3/5 flex flex-col h-screen">
    <NavigationBar />
    <div>
    </div>
    <PageFooter />
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  async asyncData ({ $content }) {
    const pages = await $content()
      .only(['title', 'body', 'type'])
      .sortBy('createdAt', 'desc')
      .fetch()
    return {
      pages
    }
  }
}
</script>
