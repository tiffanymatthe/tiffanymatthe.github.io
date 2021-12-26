<template>
  <div class="w-4/5 mx-auto md:w-3/5 flex flex-col h-screen">
    <NavigationBar />
    <article class="grid grid-cols-12 pb-24">
        <nuxt-img
        class="rounded-lg col-start-3 col-span-8 w-full"
        :src="post.image"
        width="768"
        height="509"
        />
        <div class="w-full col-start-1 col-span-12 grid grid-cols-12">
        <div class="col-start-1 col-span-12 w-full">
            <div>
            <NuxtLink to="/" href="/" class="block text-gray-400 mt-8">← Go Back</NuxtLink>
            <ul v-if="post.tags" class="flex space-x-3 mt-2">
                <li
                class="text-gray-400 font-bold"
                v-for="tag in post.tags"
                :key="tag"
                >
                {{ tag }}
                </li>
            </ul>
            <h1 class="text-5xl font-black mt-2">{{ post.title }}</h1>
            </div>
            <nuxt-content class="mt-4 prose max-w-none" :document="post" />
        </div>
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
