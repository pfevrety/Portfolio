<template>
  <article
    class="group shadow-xl hover:shadow-2xl flex flex-col m-5 min-h-[14rem] p-4 dark:bg-gray-900 bg-white w-80 rounded-xl transform translate-1 duration-300 ease-in-out transition hover:scale-105"
  >
    <div class=" flex-auto items-start">
        <header class="justify-between flex flex-wrap">
      <h4 class="text-2xl dark:text-white">{{ projectName }}</h4>
      <h6 class="font-light dark:text-white">{{ projectTeam }}</h6>
      </header>
    <p class=" flex-start items-start dark:text-gray-400">{{ projectDescription }}</p>
    </div>
    <div class="items-end flex justify-between">
      <div class="flex items-center flex-wrap">
        <svg class="h-4 group-hover:scale-110 transform transition duration-300 translate-1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="50" />
        </svg>
        <span class="p-2 dark:text-white">{{ projectLanguage }}</span>
      </div>
      <a :href="projectLink" class="transform space-0 hover:scale-105 ease-in-out p-1 pl-3 text-white pr-3 text-lg bg-green-400 rounded-lg hover:bg-green-500 transition duration-500">Afficher</a>
    </div>

  </article>
</template>

<script>
export default {
  name: 'projectCard',
  props: [
    'projectName',
    'projectDescription',
    'projectLink',
    'projectLanguage',
    'projectColor',
    'projectTeam',
  ],
}
</script>
