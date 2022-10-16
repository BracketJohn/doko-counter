<script setup lang="ts">
import Screen from './Screen.vue'
</script>

<template>
  <Story title="Screen">
    <Variant title="Plain">
      <Screen>
        <template #header>
          Das ist eine Überschrift
        </template>
        <p>Im body ist stets komplexer inhalt</p>
        <a-button>Ja!</a-button>
      </Screen>
    </Variant>
    <Variant title="No header">
      <Screen>
        <p>Im body ist stets komplexer inhalt</p>
        <a-button>Ja!</a-button>
      </Screen>
    </Variant>
  </Story>
</template>
