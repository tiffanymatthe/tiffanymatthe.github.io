<template>
  <div class="w-4/5 mx-auto md:w-3/5 flex flex-col h-screen" id="top">
    <NavigationBar />
    <article>
        <div class="w-full">
          <div class="w-full relative">
            <NuxtLink v-if="post.titleColor !== undefined" to="/" href="/" class="block mt-8 no-highlight" :style="`color:#${post.titleColor}`">← Go Back</NuxtLink>
            <h1 class="text-5xl pb-3 mt-2 z-10 font-bold">{{ post.title }}</h1>
            <div v-if="post.color !== undefined" class="project-colour-block bottom-0 m-0 p-0 absolute block -z-50 overflow-hidden right-[-9.7vw] md:right-[-19.6vw]" :style="`background-color:#${post.color}`"></div>
          </div>
          <div v-if="post.description === undefined" class="italic">
            <span v-for="(tag,index) in post.tags" :key="tag">
              {{tag}}
              <span v-if="index != post.tags.length - 1"> | </span>
            </span>
            <div>{{post.date | formatDate}}</div>
          </div>
          <div v-if="post.description !== undefined" class="grid grid-cols-1 md:grid-cols-2 pt-3">
            <span v-if="post.description !== undefined" class="col-span-2 pr-5 text-xl pb-5">{{ post.description }}</span>
            <div class="md:col-end-12 md:text-right md:w-40">
              <span v-for="(tag,index) in post.tags" :key="tag">
                {{tag}}
                <span v-if="index != post.tags.length - 1"> | </span>
              </span>
              <div v-if="post.year !== undefined" class="pt-3">{{post.year}}</div>
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
    let post
    try {
      post = await $content('projects', params.slug).fetch()
    } catch (err) {
      console.log('error')
      post = await $content('posts', params.slug).fetch()
    }
    console.log(post)
    return { post }
  }
}
</script>
