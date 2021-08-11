<template>
  <section class="max-w-screen-xl mx-auto my-20">
    <h2 class="text-5xl text-gray-800 mt-40 text-center border border-pink-300">
      accordion
    </h2>
    <div class="w-[752px] mx-auto">
      <h2 class="text-lg italic">Veelgestelde vragen</h2>
      <p>
        Bekijk hier welke vragen vaak gesteld worden. Staat uw vraag hier niet
        tussen neem dan contact op met het vakantiepark
      </p>
      <div class="mt-10">
        <Accordion v-for="(faq, i) in faqs" :key="i" :header="faq.question">
          {{ faq.answer }}
        </Accordion>
      </div>
    </div>
  </section>
</template>

<script>
import Accordion from '../components/Accordion.vue'
export default {
  components: { Accordion },
  data() {
    return {
      faqs: [
        {
          question: 'Mag ik met vrienden of familie in 1 woning verblijven?',
          answer:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus dolorum esse illum ipsum magnam natus nesciunt perspiciatis sequi sit ut? Autem beatae cum cupiditate dicta, dolore dolorum eaque earum et ex exercitationem ipsa iste itaque iure molestiae mollitia neque nisi non nostrum officia possimus qui quia quisquam quod sapiente sed tempore voluptas. Animi deserunt doloremque dolores excepturi facilis fuga ipsa nam quis, soluta suscipit. A animi aperiam culpa deleniti ea enim esse hic maiores, minus nemo quam quas reiciendis repellendus.',
        },
        {
          question: 'Mag ik met vrienden of familie in 1 woning verblijven?',
          answer:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus dolorum esse illum ipsum magnam natus nesciunt perspiciatis sequi sit ut? Autem beatae cum cupiditate dicta, dolore dolorum eaque earum et ex exercitationem ipsa iste itaque iure molestiae mollitia neque nisi non nostrum officia possimus qui quia quisquam quod sapiente sed tempore voluptas. Animi deserunt doloremque dolores excepturi facilis fuga ipsa nam quis, soluta suscipit. A animi aperiam culpa deleniti ea enim esse hic maiores, minus nemo quam quas reiciendis repellendus.',
        },
        {
          question: 'Mag ik met vrienden of familie in 1 woning verblijven?',
          answer:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus dolorum esse illum ipsum magnam natus nesciunt perspiciatis sequi sit ut? Autem beatae cum cupiditate dicta, dolore dolorum eaque earum et ex exercitationem ipsa iste itaque iure molestiae mollitia neque nisi non nostrum officia possimus qui quia quisquam quod sapiente sed tempore voluptas. Animi deserunt doloremque dolores excepturi facilis fuga ipsa nam quis, soluta suscipit. A animi aperiam culpa deleniti ea enim esse hic maiores, minus nemo quam quas reiciendis repellendus.',
        },
      ],
    }
  },
}
</script>
