<template>
  <div>
    <section v-for="(competence, i) in competences" class="p-6" :key="i">
      <h3 class="ml-6 text-3xl font-bold dark:text-white">{{ competence.name }}</h3>
      <p class="p-2 ml-4 text-2xl font-light dark:text-white">{{ competence.description }}</p>
      <div
        class="grid gap-x-2 xl:grid-cols-7 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 m-auto"
      >
        <competenceCard v-for="(tech, i) in competence.techs" :key="i" :data="tech" />
      </div>
    </section>
  </div>
</template>

<script>
import competenceCard from "~/components/competenceCard.vue";

export default {
  name: "competence",
  component: {
    competenceCard
  },
  data() {
    return {
      competences: [
        {
          name: "Techs",
          description: "Mes compétences",
          techs: [
            {
              name: "Html",
              slug: 'html',
              description: "Vue. is ...."
            },
            {
              name: "CSS",
              slug: 'css',
              description: "Vue. is ...."
            },
            {
              name: "Javascript",
              slug: 'javascript',
              description: "Vue. is ...."
            },
            {
              name: "Tailwind",
              slug: 'tailwind',
              description: "Vue. is ...."
            },
            {
              name: "Node.js",
              slug: 'nodejs',
              description: "Vue. is ...."
            },
            {
              name: "Vue.js",
              slug: 'vue',
              description: "Vue. is ...."
            },
            {
              name: "Discord.js",
              slug: 'discordjs',
              description: "Vue. is ...."
            },
          ]
        },
        {
          name: "Techs",
          description: "Mes compétences",
          techs: [
            {
              name: "Vue.js",
              slug: 'html',
              description: "Vue. is ...."
            },
          ]
        },
      ]
    }
  },
};
</script>

