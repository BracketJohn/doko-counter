<template>
  <div class="max-w-lg">
    <h1 v-if="$slots.header" class="mb-4 text-lg">
      <slot name="header" />
    </h1>
    <slot>
      Body
    </slot>
  </div>
</template>
