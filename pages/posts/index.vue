<template>
  <div class="w-4/5 mx-auto md:w-3/5 flex flex-col h-screen">
    <NavigationBar />
    <ul>
      <li v-for="post in posts" :key="post.slug">
        <NuxtLink :to="post.path">{{ post.title }}</NuxtLink>
      </li>
    </ul>
    <PageFooter />
  </div>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const posts = await $content('posts')
      .sortBy('createdAt', 'desc')
      .fetch()
    return {
      posts
    }
  }
}
</script>
