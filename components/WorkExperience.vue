<template>
<div>
    <div class="text-3xl py-5">
        Work
    </div>
    <div v-for="experience in experiences" :key="experience.name">
        <div class="md:flex md:justify-between">
          <div>
            <a target="_blank" :href="experience.link" class="font-bold">{{experience.name}}</a>
            <div class="md:inline md:pl-2">{{experience.description}}</div>
          </div>
          <div class="md:inline-block md:pl-2 text-gray-500 md:text-right md:ml-auto md:mr-0">({{experience.range}})</div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      experiences: [
        { name: 'Kardium Inc.', range: 'Jan. - Apr. 2021', description: 'automated mechanical jigs in C# for medical device production', link: 'https://kardium.com/' },
        { name: 'Stewart Blusson Quantum Institute', range: 'May - Aug. 2020', description: 'physics research assistant', link: 'https://qmi.ubc.ca/' }
      ]
    }
  }
}
</script>
