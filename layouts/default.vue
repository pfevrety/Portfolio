<template>
  <main class="bg-yellow-50 font-ubuntu dark:bg-gray-800">
    <NavBar />
    <Nuxt />
    <pageFooter class="block h-full"/>
  </main>
</template>

<script lang="ts">
import NavBar from '~/components/NavBar.vue'
import pageFooter from '~/components/pageFooter.vue'

export default {
  components: {
    NavBar,
    pageFooter,
  },
}
</script>
