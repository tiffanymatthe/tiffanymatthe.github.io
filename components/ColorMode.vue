<template>
  <button class="btn capitalize" @click="changeMode">
    <component :is="`icon-${btnLabel}`" />
  </button>
</template>

<script>
import IconLight from '@/assets/icons/light.svg?inline'
import IconDark from '@/assets/icons/dark.svg?inline'

export default {
  components: {
    IconLight,
    IconDark
  },
  computed: {
    btnLabel () {
      return this.$colorMode.preference === 'light' ? 'dark' : 'light'
    }
  },
  methods: {
    changeMode () {
      this.$colorMode.preference =
      this.$colorMode.preference === 'light' ? 'dark' : 'light'
    }
  }
}
</script>
