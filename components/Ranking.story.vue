<script setup lang="ts">
import { logEvent } from 'histoire/client'

import Ranking from './Ranking.vue'
import { generateRound } from '~/tests/fakeData'
</script>

<template>
  <Story title="Ranking">
    <Variant title="Plain">
      <Ranking :round="generateRound()" @start="logEvent('start', $event)" />
    </Variant>
  </Story>
</template>
