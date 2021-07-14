<template>
  <div class="max-w-screen-xl mx-auto my-20 text-sm">
    <table class="border-collapse border border-green-800 text-center">
      <thead>
        <tr class="overflow-auto">
          <td class="border border-green-800 w-20 h-10 px-3 py-2"></td>
          <td
            v-for="(day, j) in byStartDate"
            :key="j"
            class="border border-green-800 w-20 h-10 px-3 py-2"
          >
            {{ formatDate(day[0].arrivalDate) }}
          </td>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(value, duration) in byDuration"
          :key="duration"
          class="overflow-auto"
        >
          <td class="border border-green-800 w-20 h-10 px-3 py-2">
            {{ duration }} dagen
          </td>
          <td
            v-for="(days, j) in byStartDate"
            :key="j"
            class="border border-green-800 w-20 h-10 px-3 py-2"
          >
            {{ getPrice(duration, days) }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { byStartDate, byDuration } from '../model/data'

export default {
  name: 'Table',
  data() {
    return {
      byStartDate,
      byDuration,
    }
  },
  methods: {
    formatDate(val) {
      const date = new Date(`${val.year}-${val.month}-${val.day}`)
      return `${date.toLocaleString('nl', {
        weekday: 'short',
      })} ${date.getDate()} ${date.toLocaleString('nl', { month: 'short' })}`
    },
    getPrice(duration, days) {
      const day = days.find((day) => day.duration === +duration)
      if (day) {
        return day.price
      }
    },
  },
}
</script>
