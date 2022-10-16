<script setup lang="ts">
import { logEvent } from 'histoire/client'

import WhoWasRe from './WhoWasRe.vue'
import { generateRound } from '~/tests/fakeData'
</script>

<template>
  <Story title="WhoWasRe">
    <Variant title="Plain">
      <WhoWasRe :round="generateRound()" @cancel="logEvent('cancel', $event)" @done="logEvent('done', $event)" />
    </Variant>
  </Story>
</template>
