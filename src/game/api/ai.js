import equals from 'array-equal'
import shuffle from 'shuffle-array'

import permutations from './permutations'
import scoreCalc from './scoreCalc'

import { NUMERALS, GUESS_LENGTH } from '../constants/Game'

export function getChoices(prevChoices, answer, score) {
  let choices = []
  
  if (prevChoices === undefined) {
    choices = shuffle(permutations(NUMERALS, GUESS_LENGTH))
  }
  else {
    for (let c of prevChoices) {
      if (equals(scoreCalc(c, answer), score)) {
        choices.push(c)
      }
    }
  }

  return choices
}

export function getScore(guess, secret) {
  return scoreCalc(guess, secret)
}

export function getGuess(choices) {
  return choices[0]
}

export function createSecret() {
  return shuffle.pick(permutations(NUMERALS, GUESS_LENGTH))
}