<template>
    <div>
        <div class="text-3xl py-5">
            Projects
        </div>
        <div class="grid mb-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 px-5">
            <div class="max-w-sm overflow-hidden m-2 border rounded-xl"
            style="border-color:rgb(64, 64, 64);"
            v-for="post in posts"
            :key="post.title"
            >
                <NuxtLink class="no-highlight" :to="`${post.slug}`">
                <div class="flex justify-between flex-col h-full">
                    <div><img class="w-full" :src="post.image" :alt="post.title"></div>
                    <div class="px-6 py-4 card-body">
                        {{post.slug}}
                        <div class="font-bold text-xl mb-2 card-title" :style="`color:#${post.titleColor}`">{{post.title}}</div>
                        <div>
                            <span v-for="(tag,index) in post.tags" :key="tag">
                                {{tag}}
                                <span v-if="index != post.tags.length - 1"> | </span>
                            </span>
                        </div>
                    </div>
                </div>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    posts: Array
  }
}
</script>
