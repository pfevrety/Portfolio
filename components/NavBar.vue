<template>
  <header class="antialiased">
    <nav class="flex items-center justify-between flex-wrap p-6">
      <div class="flex items-center flex-no-shrink text-white mr-6">
        <svg height="100" version="1.1" viewBox="0, 0, 400,305.15806988352745"
             width="100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <g>
            <path
              d="M187.939 134.043 C 184.119 134.653,181.972 135.150,180.524 135.761 C 179.972 135.993,179.324 136.183,179.084 136.183 C 178.843 136.183,178.127 136.405,177.491 136.675 C 176.856 136.946,175.924 137.338,175.420 137.546 C 166.946 141.058,158.960 147.169,153.204 154.548 C 152.072 155.999,151.145 157.285,151.145 157.405 C 151.145 157.524,150.767 158.123,150.305 158.736 C 149.281 160.095,148.954 160.638,147.984 162.595 C 146.297 166.000,145.344 168.164,145.344 168.589 C 145.344 168.836,145.227 169.169,145.084 169.328 C 144.854 169.586,144.433 170.895,143.222 175.115 C 141.834 179.955,141.682 183.809,141.681 214.124 L 141.679 243.057 168.931 242.979 L 196.183 242.901 196.337 220.611 C 196.484 199.381,196.520 198.255,197.086 196.947 C 198.570 193.518,201.020 190.873,204.181 189.287 L 206.260 188.244 228.855 188.092 L 251.450 187.939 251.450 160.763 L 251.450 133.588 221.374 133.547 C 194.049 133.511,190.990 133.556,187.939 134.043 "
              fill="#05acfc" fill-rule="evenodd" stroke="none"></path>
            <path
              d="M196.489 64.728 C 195.832 65.009,141.985 118.792,141.985 119.167 C 141.985 119.290,166.615 119.356,196.718 119.314 L 251.450 119.237 251.528 92.247 C 251.585 72.560,251.513 65.145,251.262 64.842 C 250.863 64.361,197.605 64.250,196.489 64.728 "
              fill="#fcb405" fill-rule="evenodd" stroke="none"></path>
          </g>
        </svg>
        <div class="relative -m-5">
          <span class="block font-semibold text-xl text-gray-600 dark:text-white">Pfevrety</span>
          <span class="block font-semibold text-gray-600 dark:text-gray-100">Développeur</span>
        </div>
      </div>
      <div class="block sm:hidden">
        <button
          class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white"
          @click="open = !open">
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div :class="open ? 'block text-left': 'hidden text-right'"
           class="w-full flex-grow sm:flex sm:items-center sm:w-auto">
        <div class="text-sm sm:flex-grow">
          <a :class="open ? 'block': 'inline'" class="text-lg mr-5 dark:text-gray-400 text-gray-700 hover:text-gray-500 transition ease-in-out duration-300"
             href="#presentation">
            Présentation
          </a>
          <a :class="open ? 'block': 'inline'" class="text-lg mr-5 dark:text-gray-400 text-gray-700 hover:text-gray-500 transition ease-in-out duration-300"
             href="#competence">
            Compétences
          </a>
          <a :class="open ? 'block': 'inline'" class="text-lg mr-5 dark:text-gray-400 text-gray-700 hover:text-gray-500 transition ease-in-out duration-300"
             href="#project">
            Projets
          </a>
          <button class="focus:outline-none transition duration-500 ease-in-out transform hover:-translate-1 hover:scale-105 bg-green-200 border-green-700 text-green-700 text-base border-2	 font-semibold px-6 py-2 rounded-lg"><a href="#footer">Me contacter</a></button>
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
export default {
  name: "NavBar",
  data() {
    return {
      open: false
    };
  }
};
</script>

<style>
*{
  scroll-behavior: smooth;
}
</style>