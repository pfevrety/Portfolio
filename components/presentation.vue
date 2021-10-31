<template>
  <section
    class="flex items-center justify-between flex-wrap md:flex-nowrap"
    id="presentation"
  >
    <div class="w-8/12">
      <h2 class="text-5xl font-bold dark:text-white">Qui je suis</h2>
      <p
        class="text-2xl font-light bg-green-500 w-special mt-5 mb-3 dark:text-white"
      >
        Developper
      </p>

      <div class="font-extralight dark:text-gray-400">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
    <nuxt-img
      width="224"
      height="224"
      format="webp"
      quality="70"
      fit="contain"
      v-tilt
      class="fade_animation w-56 h-56 relative lg:-left-24 shadow-2xl m-5"
      src="/pfevrety.png"
    />
  </section>
</template>

<style>
@media (min-width: 768px) {
  .w-special {
    width: 91vw;
  }
}

.fade_animation {
  animation: fade 0.8s ease-in-out;
}

@keyframes fade {
  from {
    opacity: 20%;
    transform: translateX(30px);
  }

  to {
    transform: translateX(0);
  }
}
</style>
