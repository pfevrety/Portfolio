<template>
  <div>
    <article
      @click="generateModal()"
      class="group h-32 w-48 flex-col m-2 justify-center items-center dark:bg-gray-900 shadow-lg hover:shadow-2xl bg-gray-50 flex rounded-xl transform duration-200 ease-in-out transition hover:-translate-y-2"
    >
      <img
        :src="require(`../assets/img/${data.slug}.webp`)"
        class="filter grayscale group-hover:grayscale-0 w-auto h-10 transform duration-200 ease-in-out transition"
      />
      <h4 class="text-lg mt-2 text-center font-semibold text-gray-600">{{ data.name }}</h4>
      <!-- <p class=" font-thin dark:text-gray-200">{{ techDescription }}</p> -->
    </article>
    <transition name="fade">
      <div v-if="clicked" @click="generateModal()">
        <div
          class="flex flex-col space-y-4 min-w-screen h-screen animated faster fixed left-0 top-0 justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-black bg-opacity-60"
        >
          <div
            @click="generateModal()"
            class="flex flex-col p-8 bg-gray-800 shadow-md hover:shodow-lg rounded-2xl"
          >
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-16 h-16 rounded-2xl p-3 border border-gray-800 text-blue-400 bg-gray-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div class="flex flex-col ml-3">
                  <div class="font-medium leading-none text-gray-100">{{ techName }}</div>
                  <p
                    class="text-sm text-gray-500 leading-none mt-1"
                  >By deleting your account you will lose your all data</p>
                </div>
              </div>
              <button
                class="flex-no-shrink bg-red-500 px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-red-500 text-white rounded-full"
              >Delete</button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "competenceCard",
  props: ['data'],
  data() {
    return {
      clicked: false,
    }
  },
  methods: {
    generateModal() {
      this.clicked = !this.clicked;
    }
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
