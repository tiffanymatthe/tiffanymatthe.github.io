<template>
  <div class="w-4/5 mx-auto md:w-3/5 flex flex-col h-screen">
    <NavigationBar />
    <article>
        <div class="w-full">
          <div class="w-full relative">
            <NuxtLink to="/" href="/" class="block mt-8" :style="`color:#${post.color}`">← Go Back</NuxtLink>
            <h1 class="text-5xl pb-3 mt-2 z-10">{{ post.title }}</h1>
            <div class="project-colour-block bottom-0 m-0 p-0 absolute block -z-50 overflow-hidden" :style="`background-color:#${post.titleColor}`"></div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 pt-3">
            <span class="col-span-2 pr-5 text-xl pb-5">{{ post.description }}</span>
            <div class="md:col-end-12 md:text-right md:w-40">
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
    const post = await $content(params.slug).fetch()
    return { post }
  }
}
</script>
