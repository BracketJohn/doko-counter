<script setup lang="ts">
import { useNow } from '@vueuse/core'
import dayjs from 'dayjs'

const emit = defineEmits<{
  (e: 'done'): void
  (e: 'cancel'): void
}>()
const start = dayjs()
const currentTime = useNow()

const duration = computed(() => {
  const diffInMilliSeconds = dayjs(currentTime.value).diff(start)
  const asDate = new Date(diffInMilliSeconds)

  const hours = String(asDate.getHours() - 1).padStart(2, '0')
  const minutes = String(asDate.getMinutes()).padStart(2, '0')
  const seconds = String(asDate.getSeconds()).padStart(2, '0')

  return `${hours}:${minutes}:${seconds}`
})
</script>

<template>
  <CommonScreen>
    <template #header>
      Runde läuft...
    </template>
    <p>Eure Runde läuft seit {{ duration }}</p>
    <div class="flex flex-col">
      <a-button class="mb-4" type="primary" @click="emit('done')">
        Fertig!
      </a-button>
      <a-button @click="emit('cancel')">
        Abbrechen
      </a-button>
    </div>
  </CommonScreen>
</template>
