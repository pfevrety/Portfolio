<template>
  <section id="project">
    <h3 class="ml-2 text-3xl font-bold dark:text-white">Projets</h3>
    <p class="p-2 text-2xl font-light dark:text-white">
      L'ensemble de mes projets sont disponibles sur mon
      <a class="font-medium" href="https://www.github.com/pfevrety"
        >profil github</a
      >
    </p>
    <div
      class="flex flex-col lg:flex-row space-y-2 lg:flex-wrap justify-between"
      id="competence"
      v-if="loaded"
    >
      <ProjectCard v-for="(repo, i) in repos" :key="i" :project="repo" />
    </div>
  </section>
</template>

<script>
import projectCard from '~/components/projectCard.vue'

export default {
  name: 'project',
  component: {
    projectCard
  },
  data() {
    return {
      repos: [],
      loaded: true
    }
  },

  async mounted() {
    await fetch('https://gh-pinned-repos.egoist.sh/?username=pfevrety')
      .then(r => r.json())
      .then(r => (this.repos = r))
      .then((this.loaded = true))
      .catch(error => console.log(error))
  }
}
</script>
