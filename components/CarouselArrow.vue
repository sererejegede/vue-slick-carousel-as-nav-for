<template>
  <button
    class="
      absolute
      -bottom-6
      z-10
      h-16
      w-16
      bg-green-700
      rounded-full
      grid
      place-items-center
      focus:outline-none
      drop-shadow-2xl
      active:bg-green-500
    "
  >
    <Caret class="text-white" :class="{ 'transform rotate-180': isPrev }" />
  </button>
</template>

<script>
import Caret from '../components/Caret.vue'
export default {
  components: {
    Caret,
  },
  props: {
    isPrev: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.slick-prev {
  left: calc(50% + 128px);
}
.slick-next {
  left: calc(50% + 128px + 48px);
  margin-left: 32px;
}
.slick-disabled {
  opacity: 0.5;
  &:active {
    @apply bg-green-700;
  }
}
</style>
