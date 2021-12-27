<template>
  <div class="w-4/5 mx-auto md:w-3/5 flex flex-col h-screen" id="top">
    <NavigationBar />
    <div>
      <h1 class="text-5xl pb-3 mt-2 z-10">{{ page.title }}</h1>
      <nuxt-content class="mt-4 prose max-w-none" :document="page" />
    </div>
    <PageFooter />
  </div>
</template>

<script>
export default {
  name: 'NowPage',
  async asyncData ({ $content }) {
    const page = await $content('single-pages/now')
      .only(['title', 'body', 'type'])
      .fetch()
    return {
      page
    }
  }
}
</script>
