<template>
  <article class="group pt-4 dark:bg-gray-900 shadow-xl hover:shadow-2xl m-5  h-56 bg-white w-80 flex rounded-xl transform translate-1 duration-300 ease-in-out transition hover:scale-105">
    <img :src="techImg" class="group-hover:scale-110 filter grayscale group-hover:grayscale-0 w-auto h-20 m-2 p-4 transform translate-1 duration-300 ease-in-out transition">
    <div>
      <h4 class="text-xl dark:text-white">{{ techName }}</h4>
      <p class=" font-thin dark:text-gray-200">{{ techDescription }}</p>
    </div>
  </article>
</template>

<script>
export default {
  name: "competenceCard",
  props: ['techImg', 'techName', 'techDescription'],
};
</script>
