<template>
  <div class="font-ubuntu">
    <presentation />
    <competence />
    <project />
  </div>
</template>

<script>
  export default {
    head() {
      return {
        title: "Pfevrety",
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Page principale du portfolio de pfevrety'
          }
        ],
                link: [
          {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap'
          }
        ]

      }
    }
  }
</script>

