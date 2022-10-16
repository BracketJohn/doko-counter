<script setup lang="ts">
import type { Ref } from 'vue'
import { generateRound } from '~/tests/fakeData'

type RoundStates = 'preGame' | 'inGame' | 'evaluationTeams' | 'evaluationWhoWon' | 'evaluationScore'

const round = generateRound()

const state: Ref<RoundStates> = ref('preGame')
</script>

<template>
  <div class="">
    <Ranking v-if="state === 'preGame'" :round="round" @start="state = 'inGame'" />
    <InRound v-if="state === 'inGame'" @cancel="state = 'preGame'" @done="state = 'evaluationTeams'" />
    <EvaluationWhoWasRe v-if="state === 'evaluationTeams'" :round="round" @cancel="state = 'inGame'" @done="state = 'evaluationWhoWon'" />
    <EvaluationWhatTeamWon v-if="state === 'evaluationWhoWon'" @cancel="state = 'evaluationTeams'" @done="state = 'evaluationScore'" />
    <EvaluationPoints v-if="state === 'evaluationScore'" @cancel="state = 'evaluationWhoWon'" @done="state = 'preGame'" />
  </div>
</template>
