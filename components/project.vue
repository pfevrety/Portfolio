<template>
<section class="m-4 p-6" id="project">
    <h3 class="ml-2 text-3xl font-bold dark:text-white">Mes compétences</h3>
    <p class="p-2 text-2xl font-light dark:text-white">Lorem Ipsum dollor si amet</p>
  <div class=" flex flex-wrap justify-between" id="competence">
  <ProjectCard projectName="palamazon" projectTeam="palamazon" projectLink="e" projectDescription="Lorem ipsum dolor si amfytsdhgwis hsufhghbfhjbwm uidfkjkgbgkdfwi uyhkhegdwgydgiys gdiuvgsyig iysg diyv gyisgyh f<hsgu" projectLanguage="Vue"/>
  <ProjectCard projectName="Darwin" projectTeam="pfevrety" projectLink="e" projectDescription="A fully customizable bot with many command!" projectLanguage="Node js"/>
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

