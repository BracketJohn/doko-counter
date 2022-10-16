<script setup lang="ts">
import type { PropType } from 'vue'
import type { Round } from '../types'

const { round } = defineProps({
  round: {
    type: Object as PropType<Round>,
    required: true,
  },
})
</script>

<template>
  <CommonScreen>
    <template #header>
      Rangliste "{{ round.name }}"
    </template>
    <div v-for="(member, index) in round.members" :key="member.id" class="flex flex-row justify-between text-xl">
      <h3>{{ index + 1 }}. {{ member.name }}</h3>
      <h3>{{ round.scores[member.id].points }}</h3>
    </div>
  </CommonScreen>
</template>
