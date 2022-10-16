<script setup lang="ts">
import { logEvent } from 'histoire/client'

import WhatTeamWon from './WhatTeamWon.vue'
</script>

<template>
  <Story title="WhatTeamWon">
    <Variant title="Plain">
      <WhatTeamWon @cancel="logEvent('cancel', $event)" @done="logEvent('done', $event)" />
    </Variant>
  </Story>
</template>
