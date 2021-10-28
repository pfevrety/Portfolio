<template>
  <section class="p-6" id="competence">
    <h3 class="ml-6 text-3xl font-bold dark:text-white">Mes compétences</h3>
    <p class="p-2 ml-4 text-2xl font-light dark:text-white">Lorem Ipsum dollor si amet</p>
    <div class="flex w-full justify-between ml-4 flex-wrap lg:p-1">
      <competenceCard
        techDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pharetra arcu dui, ut congue quam laoreet ac. Praesent convallis tincidunt ante, ut tincidunt nisi vestibulum ac."
        techImg="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
        techName="Javascript"
        v-for="i in 16"
      />
      <competenceCard
        techDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pharetra arcu dui, ut congue quam laoreet ac. Praesent convallis tincidunt ante, ut tincidunt nisi vestibulum ac."
        techImg="https://www.dotcom-monitor.com/blog/wp-content/uploads/sites/3/2020/05/Vue-logo-1.png"
        techName="VueJs"
      />
      <competenceCard
        techDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pharetra arcu dui, ut congue quam laoreet ac. Praesent convallis tincidunt ante, ut tincidunt nisi vestibulum ac."
        techImg="https://grafikart.fr/uploads/icons/elasticsearch.svg"
        techName="ElasticSearch"
      />
      <competenceCard
        techDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pharetra arcu dui, ut congue quam laoreet ac. Praesent convallis tincidunt ante, ut tincidunt nisi vestibulum ac."
        techImg="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/768px-Python-logo-notext.svg.png"
        techName="Python"
      />
      <competenceCard
        techDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pharetra arcu dui, ut congue quam laoreet ac. Praesent convallis tincidunt ante, ut tincidunt nisi vestibulum ac."
        techImg="https://lh3.googleusercontent.com/proxy/9YbwTlcPrLb7cR9M4Wtcd3kEsLbUNmjRDeWdMqm_L2BtG2upVlohOZ21aLLUmI9ueaVHJKp67Opn61jETt6tV-qhu_4v0FjE8oZgZHXl05LJApISj1rHwcM6NDy4ebFfpc7p1GTe"
        techName="VueJs"
      />
      <competenceCard
        techDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pharetra arcu dui, ut congue quam laoreet ac. Praesent convallis tincidunt ante, ut tincidunt nisi vestibulum ac."
        techImg="https://ih1.redbubble.net/image.1637717834.1604/pp,840x830-pad,1000x1000,f8f8f8.u1.jpg"
        techName="VueJs"
      />
      <competenceCard
        techDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pharetra arcu dui, ut congue quam laoreet ac. Praesent convallis tincidunt ante, ut tincidunt nisi vestibulum ac."
        techImg="https://ih1.redbubble.net/image.1637717834.1604/pp,840x830-pad,1000x1000,f8f8f8.u1.jpg"
        techName="VueJs"
      />

      <competenceCard
        techDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pharetra arcu dui, ut congue quam laoreet ac. Praesent convallis tincidunt ante, ut tincidunt nisi vestibulum ac."
        techImg="https://ih1.redbubble.net/image.1637717834.1604/pp,840x830-pad,1000x1000,f8f8f8.u1.jpg"
        techName="VueJs"
      />
    </div>
  </section>
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
          name: "Javascript",
          description: ""
        }
      ]
    }
  },
};
</script>

