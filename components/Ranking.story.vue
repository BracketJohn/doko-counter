<script setup lang="ts">
import Ranking from './Ranking.vue'
import { generateRound } from '~/tests/fakeData'
</script>

<template>
  <Story title="Ranking">
    <Variant title="Plain">
      <Ranking :round="generateRound()" />
    </Variant>
  </Story>
</template>
