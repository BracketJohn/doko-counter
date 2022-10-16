<script setup lang="ts">
import { notification } from 'ant-design-vue'

const emit = defineEmits<{
  (e: 'done', score: number): void
  (e: 'cancel'): void
}>()

const score = ref('')

const checkAndEmit = () => {
  const inputScore = score.value.trim()
  if (inputScore.length === 0) {
    notification.error({
      message: 'Ungültiger Punktestand',
      description: 'Der Punktewert darf nicht leer sein.',
    })
    return
  }

  const asNumber = Number(inputScore)
  if (isNaN(asNumber)) {
    notification.error({
      message: 'Ungültiger Punktestand',
      description: 'Der Punktewert muss eine Zahl sein.',
    })
    return
  }
  emit('done', asNumber)
}
</script>

<template>
  <CommonScreen>
    <template #header>
      Wieviele Punkte gab es?
    </template>
    <p>
      Nenne hier bitte alle Punkte die von der Re-Partei erlangt wurden.
    </p>
    <p>
      Der Punktwert muss Bonuspunkte (Karlchen, Verdoppluyng durch Bockrunden, Füchschen, ...) bereits enthalten.
    </p>
    <p>
      Nicht beinhalten darf der Punktewert Multiplikation aufgrund eines Solos - dies macht die Anwendung automatisch.
    </p>
    <div class="flex flex-col space-y-2">
      <a-input v-model:value="score" class="w-full" placeholder="Punkte" pattern="[0-9]+" />
      <a-button type="primary" @click="checkAndEmit">
        Spiel abschließen
      </a-button>
      <a-button @click="emit('cancel')">
        Zurück
      </a-button>
    </div>
  </CommonScreen>
</template>
