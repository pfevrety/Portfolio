<template>
<section class="m-4 p-6" id="project">
    <h3 class="ml-2 text-3xl font-bold">Mes compétences</h3>
    <p class="p-2 text-2xl font-light">Lorem Ipsum dollor si amet</p>
  <div class=" flex flex-wrap justify-between" id="competence">
  <ProjectCard projectName="palamazon" projectTeam="palamazon" projectLink="e" projectDescription="🖼 Palamazon front end." projectLanguage="Vue"/>
  <ProjectCard projectName="palamazon" projectTeam="palamazon" projectLink="e" projectDescription="🖼 Palamazon front end." projectLanguage="Vue"/>
  <ProjectCard projectName="palamazon" projectTeam="palamazon" projectLink="e" projectDescription="🖼 Palamazon front end." projectLanguage="Vue"/>
  <ProjectCard projectName="palamazon" projectTeam="palamazon" projectLink="e" projectDescription="🖼 Palamazon front end." projectLanguage="Vue"/>
</div>
</section>
</template>

<script>
import projectCard from "~/components/projectCard.vue";

export default {
  name: "project",
  component: {
    projectCard
  }
};
</script>

