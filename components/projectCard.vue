<template>
  <XyzTransition appear-visible duration="auto">
    <article
      xyz="delay-5 thin fade stagger-2 ease-in"
      class="group shadow-xl hover:shadow-2xl ml-2 mb-6 flex flex-col min-h-[14rem] p-4 dark:bg-gray-900 bg-white lg:w-1/4 w-full rounded-xl transform translate-1 duration-300 ease-in-out transition hover:scale-[101%]"
    >
      <div class="flex-auto items-start">
        <header class="justify-between flex flex-wrap">
          <h4
            class="text-2xl dark:text-white"
          >{{ project.repo[0].toUpperCase() + project.repo.substring(1) }}</h4>
          <h6 class="font-light dark:text-white">{{ project.owner }}</h6>
        </header>
        <p class="flex-start items-start dark:text-gray-400">{{ project.description }}</p>
      </div>
      <div class="items-end flex justify-between">
        <div class="flex items-center flex-wrap">
          <svg
            class="h-4 group-hover:scale-110 transform transition duration-300 translate-1"
            viewBox="0 0 100 100"
            :fill="project.languageColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="50" cy="50" r="50" />
          </svg>
          <span class="p-2 dark:text-white">{{ project.language }}</span>
        </div>
        <a
          :href="project.link"
          class="transform space-0 hover:scale-105 ease-in-out p-1 pl-3 text-white pr-3 text-lg bg-green-400 rounded-lg hover:bg-green-500 transition duration-500"
        >Afficher</a>
      </div>
    </article>
  </XyzTransition>
</template>

<script>
export default {
  name: 'projectCard',
  props: [
    "project"
  ],
  mounted() {
    console.log(this.project);
  },
}
</script>
