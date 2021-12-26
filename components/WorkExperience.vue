<template>
<div>
    <div class="text-xl">
        Work
    </div>
    <div v-for="experience in experiences" :key="experience.name">
        <span class="underline">{{experience.name}}</span>
        &ensp;
        &ensp;
        &ensp;
        <span>{{experience.description}}</span>
    </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      experiences: [
        { name: 'Kardium Inc.', description: 'automated mechanical jigs in C# for medical device production' },
        { name: 'Stewart Blusson Quantum Institute', description: 'physics research assistant' }
      ]
    }
  }
}
</script>
