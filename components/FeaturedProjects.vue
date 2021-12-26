<template>
    <div>
        <div>
            Featured Projects.
        </div>
        <div class="grid mb-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div class="max-w-sm overflow-hidden flex justify-between flex-col m-2"
            :style="`background-color:#${post.color}`"
            v-for="post in posts"
            :key="post.title">
                <div><img class="w-full" :src="post.image" :alt="post.title"></div>
                <div class="px-6 py-4 card-body">
                    <div class="font-bold text-xl mb-2 card-title" :style="`color:#${post.titleColor}`">{{post.title}}</div>
                    <div>
                        <span v-for="(tag,index) in post.tags" :key="tag">
                            {{tag}}
                            <span v-if="index != post.tags.length - 1"> | </span>
                        </span>
                    </div>
                </div>
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
