import generatorics from 'generatorics'
import equals from 'array-equal'
import shuffle from 'array-shuffle'
import { NUMERALS, GUESS_DIGITS_LENGTH} from '../constants/Main'

function getPermutations(digits, size) {
  let permutations = []

  for (let p of generatorics.clone.permutation(digits, size)) {
    if (p[0] !== 0) {
      permutations.push(p)
    }
  }

  return permutations
}

function scoreCalc(guess, chosen) {
  let bulls, cows = 0

  for (let [g, c] of zip([guess, chosen])) {
    if (g === c) {
      bulls += 1
    }
    else if (chosen.includes(g)) {
      cows += 1
    }
  }

  return [bulls, cows]
}

function zip(arrays) {
    return arrays[0].map(function (_, i) {
        return arrays.map(function (array) {return array[i]})
    })
}

function getChoices(prevChoices, answer, score) {
  let choices = []
  
  if (typeof prevChoices === 'undefined') {
    choices = shuffle(getPermutations(NUMERALS, GUESS_DIGITS_LENGTH))
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

export const clickScoreButton = (guessDigits, scoreDigits) => {
  return {
    type: 'CLICK_SCORE_BUTTON',
    guessDigits,
    scoreDigits
  }
}

export const getScores = () => {
  const choices = getChoices()
  return {
    choices
  }
}