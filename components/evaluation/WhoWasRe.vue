<script setup lang="ts">
import { ref } from 'vue'
import type { PropType, Ref } from 'vue'
import type { Round } from '../../types'
const { round } = defineProps({
  round: {
    type: Object as PropType<Round>,
    required: true,
  },
})
const emit = defineEmits<{
  (e: 'done', rePlayerIds: string[]): void
  (e: 'cancel'): void
}>()

const selectedRePlayerIds: Ref<string[]> = ref([])
const addOrRemovePlayer = (playerId: string) => {
  if (selectedRePlayerIds.value.includes(playerId)) {
    selectedRePlayerIds.value = selectedRePlayerIds.value.filter(rePlayerId => rePlayerId !== playerId)
  } else {
    selectedRePlayerIds.value.push(playerId)
  }
}
</script>

<template>
  <CommonScreen>
    <template #header>
      Wer war Re?
    </template>
    <p>
      Wähle bei einem Solo nur die Solopartei. Wähle mindestens eine SpielerIn um fortzufahren. Rot hinterlegte Namen sind Re.
    </p>
    <div class="mb-8 flex flex-col space-y-2">
      <a-button
        v-for="member in round.members" :key="member.id"
        :type="selectedRePlayerIds.includes(member.id) ? 'danger' : 'default'"
        @click="addOrRemovePlayer(member.id)"
      >
        {{ member.name }} ({{ selectedRePlayerIds.includes(member.id) ? 'Re' : 'Contra' }})
      </a-button>
    </div>
    <div class="flex flex-col">
      <a-button class="mb-2" type="primary" :disabled="selectedRePlayerIds.length === 0" @click="emit('done', selectedRePlayerIds)">
        Ich habe alle Re-Spieler gewählt
      </a-button>
      <a-button @click="emit('cancel')">
        Zurück
      </a-button>
    </div>
  </CommonScreen>
</template>
