<template>
<div class="pb-5">
    <div class="text-3xl py-5">
        Work
    </div>
    <div v-for="experience in experiences" :key="experience.name">
        <div class="lg:flex lg:justify-between text-md">
          <div>
            <a target="_blank" :href="experience.link" class="font-bold">{{experience.name}}</a>
            <div class="md:inline lg:pl-2">{{experience.description}}</div>
          </div>
          <div class="lg:inline-block lg:pl-1 opacity-80 lg:text-right lg:ml-auto lg:mr-0">({{experience.range}})</div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      experiences: [
        { name: 'UBC Computer Engineering', range: 'Sep. - Dec. 2021', description: 'teaching assistant for Java software construction', link: 'https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-course&dept=CPEN&course=221' },
        { name: 'Kardium Inc.', range: 'Jan. - Apr. 2021', description: 'automated mechanical jigs in C# for medical device production', link: 'https://kardium.com/' },
        { name: 'Stewart Blusson Quantum Institute', range: 'May - Aug. 2020', description: 'physics research assistant', link: 'https://qmi.ubc.ca/' }
      ]
    }
  }
}
</script>
