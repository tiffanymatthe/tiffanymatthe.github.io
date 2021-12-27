<template>
  <div class="w-4/5 mx-auto md:w-3/5 flex flex-col h-screen" id="top">
    <NavigationBar />
    <article>
        <div class="w-full">
          <div class="w-full relative">
            <NuxtLink v-if="post.titleColor !== undefined" to="/" href="/" class="block mt-8 no-highlight dark:brightness-[.3]" :style="`color:#${post.titleColor}`">← Go Back</NuxtLink>
            <h1 class="text-5xl pb-3 mt-2 z-10 font-bold">{{ post.title }}</h1>
            <div v-if="post.color !== undefined" class="project-colour-block bottom-0 m-0 p-0 absolute block -z-50 overflow-hidden right-[-10vw] md:right-[-20vw] dark:brightness-[.5]" :style="`background-color:#${post.color}`"></div>
          </div>
          <div v-if="post.description === undefined" class="italic">
            <span v-for="(tag,index) in post.tags" :key="tag">
              {{tag}}
              <span v-if="index != post.tags.length - 1"> | </span>
            </span>
            <div v-if="post.data !== undefined">{{post.date | formatDate}}</div>
          </div>
          <div v-if="post.description !== undefined" class="pt-3">
            <span v-if="post.description !== undefined" class="pr-5 text-xl pb-5">{{ post.description }}</span>
            <div class="italic mt-3 mb-10">
              <span v-for="(tag,index) in post.tags" :key="tag">
                {{tag}}
                <span v-if="index != post.tags.length - 1"> | </span>
              </span>
              <div v-if="post.year !== undefined" class="pt-2">{{post.year}}</div>
            </div>
          </div>
          <nuxt-content class="mt-4 prose dark:prose-dark max-w-none" :document="post" />
        </div>
    </article>
    <PageFooter />
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    let post
    try {
      post = await $content('projects', params.slug).fetch()
      console.log('Project fetched.')
    } catch (err) {
      post = await $content('posts', params.slug).fetch()
      console.log('Post fetched.')
    }
    if (post.title === undefined) {
      post = post[0]
    }
    return { post }
  }
}
</script>
