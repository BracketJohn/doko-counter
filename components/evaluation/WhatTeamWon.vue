<script setup lang="ts">
import type { Teams } from '../../types'

const emit = defineEmits<{
  (e: 'done', winnerTeam: Teams): void
  (e: 'cancel'): void
}>()
</script>

<template>
  <CommonScreen>
    <template #header>
      Hat Re gewonnen?
    </template>
    <p>
      Die App ermittelt darauf basierend automatisch, welche SpielerInnen Contra waren und ob jemand ein Solo gespielt hat. Die Runde wird als Solo gewertet wenn nur eine Person Re war.
    </p>
    <div class="flex flex-col">
      <a-button class="mb-2" type="primary" @click="emit('done', 'Re')">
        Re hat gewonnen!
      </a-button>
      <a-button class="mb-6" type="primary" @click="emit('done', 'Contra')">
        Contra hat gewonnen!
      </a-button>
      <a-button @click="emit('cancel')">
        Zurück
      </a-button>
    </div>
  </CommonScreen>
</template>
