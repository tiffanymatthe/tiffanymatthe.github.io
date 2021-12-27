import Vue from 'vue'

// https://vinodugale219.medium.com/add-date-filter-in-nuxtjs-7dead1373d7c
Vue.filter('formatDate', (value) => {
  const date = new Date(value)
  return date.toLocaleString(['en-US'], {
    month: 'short',
    day: '2-digit',
    year: 'numeric'
  })
})
