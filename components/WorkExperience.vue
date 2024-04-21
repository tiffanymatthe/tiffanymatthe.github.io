<template>
<div class="pb-5">
    <div class="text-3xl py-5 font-serif">
        Work
    </div>
    <div class="pb-2" v-for="experience in experiences" :key="experience.name">
        <div class="text-lg">
          <div class="inline-block">
            <a target="_blank" :href="experience.link" class="font-bold">{{experience.name}}</a>
            <div class="md:inline md:pl-2">{{experience.description}}</div>
            <div class="md:inline block md:pl-2 opacity-80 md:text-right break-normal">({{experience.range}})</div>
          </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      experiences: [
        { name: 'Tesla Inc.', range: 'Sep. - Aug. 2023', description: 'robot path planning & navigation intern', link: 'https://www.tesla.com/' },
        { name: 'Nokia Bell Labs', range: 'May - Aug. 2023', description: 'robotics & communications intern', link: 'https://www.bell-labs.com/' },
        { name: 'Tesla Inc.', range: 'May - Dec. 2022', description: 'chassis controls intern', link: 'https://www.tesla.com/' },
        { name: 'UBC Computer Engineering', range: 'Sep. - Dec. 2021', description: 'teaching assistant for Java software construction', link: 'https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-course&dept=CPEN&course=221' },
        { name: 'Kardium Inc.', range: 'Jan. - Apr. 2021', description: 'automated mechanical jigs in C# for medical device production', link: 'https://kardium.com/' },
        { name: 'Stewart Blusson Quantum Institute', range: 'May - Aug. 2020', description: 'physics research assistant', link: 'https://qmi.ubc.ca/' }
      ]
    }
  }
}
</script>
