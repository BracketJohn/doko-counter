export declare interface Player {
  id: string
  name: string
}

export declare interface Score {
  id: string
  playerId: string
  points: number
}

export type ArrayFourOrMore<T> = {
  0: T
  1: T
  2: T
  3: T
} & Array<T>

export declare interface Round {
  name: string
  members: ArrayFourOrMore<Player>
  scores: Record<string, Score>
}

export type Teams = 'Re' | 'Contra'
