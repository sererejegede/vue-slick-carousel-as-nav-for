<template>
  <div>
    <div
      :class="{ 'border-b': !isOpen }"
      tabindex="0"
      class="
        flex
        justify-between
        items-center
        h-14
        border-gray-300
        cursor-pointer
      "
      @click="toggle"
    >
      <slot name="header">
        <strong>{{ header }}</strong>
      </slot>
      <svg
        :class="{ 'rotate-180': isOpen }"
        class="transition-transform"
        width="20"
        height="21"
        viewBox="0 0 20 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.25 7.995L10 14.2693L3.75 7.995"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <div
      class="overflow-hidden duration-150"
      :class="isOpen ? 'max-h-[150px]' : 'max-h-[0px]'"
    >
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Accordion',
  props: {
    header: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen
    },
  },
}
</script>
