<template>
  <div class="font-ubuntu">
    <presentation />
    <competence />
    <project />
  </div>
</template>

<script lang="ts">
import presentation from '~/components/presentation.vue'
import competence from "~/components/competence.vue";
import project from "~/components/project.vue"

export default {
  components: {
    competence,
    presentation,
    project,
  },
}
</script>

<style>
</style>
