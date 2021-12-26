<template>
<div>
    <div class="text-3xl py-5">
        Work
    </div>
    <div v-for="experience in experiences" :key="experience.name">
        <div class="md:flex md:justify-between">
          <div>
            <span class="underline bold">{{experience.name}}</span>
            <div class="md:inline md:pl-2">{{experience.description}}</div>
          </div>
          <div class="md:inline-block md:pl-2 text-slate-500 md:text-right md:ml-auto md:mr-0">({{experience.range}})</div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      experiences: [
        { name: 'Kardium Inc.', range: 'Jan. - Apr. 2021', description: 'automated mechanical jigs in C# for medical device production' },
        { name: 'Stewart Blusson Quantum Institute', range: 'May - Aug. 2020', description: 'physics research assistant' }
      ]
    }
  }
}
</script>
