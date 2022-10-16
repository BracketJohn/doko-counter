<script setup lang="ts">
import type { PropType } from 'vue'
import type { Round } from '../types'

const { round } = defineProps({
  round: {
    type: Object as PropType<Round>,
    required: true,
  },
})

const emit = defineEmits<{
  (e: 'start'): void
}>()
</script>

<template>
  <CommonScreen>
    <template #header>
      Rangliste "{{ round.name }}"
    </template>
    <div v-for="(member, index) in round.members" :key="member.id" class="flex flex-row justify-between space-y-2 text-3xl">
      <h3>{{ index + 1 }}. {{ member.name }}</h3>
      <h3>{{ round.scores[member.id].points }}</h3>
    </div>
    <a-button type="primary" class="mt-10" block @click="emit('start')">
      Nächstes Spiel starten
    </a-button>
  </CommonScreen>
</template>
