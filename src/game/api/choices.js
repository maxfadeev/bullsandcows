import equals from 'array-equal'
import shuffle from 'shuffle-array'

import permutations from './permutations'
import scoreCalc from './scoreCalc'

import { NUMERALS, GUESS_DIGITS_LENGTH } from '../constants/Game'

const choices = (prevChoices, answer, score) => {
  let cho = []
  
  if (prevChoices.length === 0) {
    cho = shuffle(permutations(NUMERALS, GUESS_DIGITS_LENGTH))
  }
  else {
    for (let c of prevChoices) {
      if (equals(scoreCalc(c, answer), score)) {
        cho.push(c)
      }
    }
  }

  return cho
}

export default choices