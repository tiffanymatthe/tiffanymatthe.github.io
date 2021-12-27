<template>
  <div class="w-4/5 mx-auto md:w-3/5 flex flex-col h-screen">
    <NavigationBar />
    <article>
        <div class="w-full">
          <div class="w-full relative">
            <NuxtLink to="/posts" href="/posts" class="block mt-8 no-highlight">← Go Back</NuxtLink>
            <h1 class="text-5xl pb-3 mt-2 z-10 font-bold">{{ post.title }}</h1>
          </div>
          <div>
            <div>
              <span v-for="(tag,index) in post.tags" :key="tag">
                {{tag}}
                <span v-if="index != post.tags.length - 1"> | </span>
              </span>
              <div class="pt-3">{{post.year}}</div>
            </div>
          </div>
          <nuxt-content class="mt-4 prose max-w-none" :document="post" />
        </div>
    </article>
    <PageFooter />
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const post = await $content('posts', params.slug).fetch()
    return { post }
  }
}
</script>
