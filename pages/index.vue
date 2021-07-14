<template>
  <div class="max-w-screen-xl mx-auto my-20">
    <div>
      <Logo />
      <h1 class="text-5xl mt-4 text-center">carousel</h1>
      <nuxt-link class="text-5xl" to="table">table</nuxt-link>
      <div class="flex items-start my-20 relative rounded-3xl">
        <div class="flex-grow mr-2 w-4/5 rounded-l-3xl">
          <VueSlickCarousel
            ref="slider"
            :as-nav-for="$refs.thumb"
            class=""
            v-bind="settings"
          >
            <div v-for="(img, i) in images" :key="i" class="w-full">
              <img
                class="w-full h-[524px] object-cover rounded-l-3xl"
                :src="img"
              />
            </div>
            <template #prevArrow>
              <CarouselArrow is-prev />
            </template>
            <template #nextArrow>
              <CarouselArrow />
            </template>
          </VueSlickCarousel>
        </div>
        <div class="flex-none w-1/5 h-[500px] rounded-r-3xl hidden sm:block">
          <VueSlickCarousel
            ref="thumb"
            :as-nav-for="$refs.slider"
            v-bind="thumbSettings"
            class="h-full"
            @afterChange="currentThumbSlide = $event"
          >
            <div v-for="(img, i) in images" :key="i" class="h-1/4">
              <img
                :src="img"
                class="w-full h-[125px] object-cover"
                :class="{
                  'rounded-br-3xl': needsRadius(i),
                  'rounded-tr-3xl': needsRadius(i, true),
                }"
              />
            </div>
          </VueSlickCarousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import CarouselArrow from '../components/CarouselArrow.vue'

export default {
  components: {
    VueSlickCarousel,
    CarouselArrow,
  },
  data() {
    return {
      settings: {
        autoplay: false,
        dots: false,
        infinite: false,
        speed: 250,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
      thumbSettings: {
        autoplay: false,
        infinite: false,
        dots: false,
        arrows: false,
        speed: 250,
        slidesToShow: 4,
        slidesToScroll: 2,
        vertical: true,
        focusOnSelect: true,
      },
      images: Array.from(
        { length: 5 },
        (item, i) => `https://picsum.photos/id/${i * 20}/900/500`
      ),
      currentThumbSlide: 0,
    }
  },
  mounted() {
    // Hack to make {:as-nav-for} work
    this.thumbSettings.slidesToScroll = 1
  },
  methods: {
    needsRadius(index, isTop) {
      if (isTop) {
        return index === this.currentThumbSlide
      }
      return (
        index - 3 === this.currentThumbSlide || index === this.images.lastIndex
      )
    },
  },
}
</script>
