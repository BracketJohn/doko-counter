<script setup lang="ts">
import { logEvent } from 'histoire/client'

import Points from './Points.vue'
</script>

<template>
  <Story title="Points">
    <Variant title="Plain">
      <Points @cancel="logEvent('cancel', $event)" @done="logEvent('done', $event)" />
    </Variant>
  </Story>
</template>
