import { faker } from '@faker-js/faker'
import type { ArrayFourOrMore, Player, Round, Score } from '~/types'

const generatePlayer = (): Player => ({
  id: faker.datatype.uuid(),
  name: faker.name.firstName(),
})

const generateScore = (playerId: string): Score => ({
  id: faker.datatype.uuid(),
  playerId,
  points: faker.datatype.number({ max: 200, min: -200 }),
})

export const generateRound = (): Round => {
  const name = 'Die Pfäustlinge'
  const members: ArrayFourOrMore<Player> = [
    generatePlayer(),
    generatePlayer(),
    generatePlayer(),
    generatePlayer(),
  ]
  const scores = Object.fromEntries(members.map(({ id }) => [id, generateScore(id)]))

  return {
    name,
    members,
    scores,
  }
}
