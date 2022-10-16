<script setup lang="ts">
import { logEvent } from 'histoire/client'
import InRound from './InRound.vue'
</script>

<template>
  <Story title="InRound">
    <Variant title="Plain">
      <InRound @done="logEvent('done', $event)" @cancel="logEvent('cancel', $event)" />
    </Variant>
  </Story>
</template>
