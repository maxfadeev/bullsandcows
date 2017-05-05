import generatorics from 'generatorics'
import equals from 'array-equal'
import shuffle from 'array-shuffle'

import { 
  NUMERALS, 
  GUESS_DIGITS_LENGTH, 
  GUESS_TURN, 
  SCORE_TURN
} from '../constants/Main'

import { 
  APPEND_SCORES,
  APPEND_GUESSES, 
  GUESSER_DERIVE_CHOICES, 
  GUESSER_CALCULATE_SCORE, 
  GUESSER_THINK_UP_SECRET,
  GUESSER_DEDUCE_GUESS,
  PRESS_SCORE_BUTTON 
} from '../constants/ActionTypes'

function getPermutations(digits, size) {
  let permutations = []

  for (let p of generatorics.clone.permutation(digits, size)) {
    if (p[0] !== 0) {
      permutations.push(p)
    }
  }

  return permutations
}

function scoreCalc(guess, secret) {
  let bulls = 0
  let cows = 0

  for (let [g, c] of zip([guess, secret])) {
    if (g === c) {
      bulls += 1
    }
    else if (secret.includes(g)) {
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

export const appendScores = (player1, player2) => {
  return {
    type: APPEND_SCORES,
    player1,
    player2
  }
}

export const appendGuesses = (player1, player2) => {
  return {
    type: APPEND_GUESSES,
    player1,
    player2
  }
}

export const guesserThinkUpSecret = () => {
  const choices = shuffle(getPermutations(NUMERALS, GUESS_DIGITS_LENGTH))
  return {
    type: GUESSER_THINK_UP_SECRET,
    secret: choices[0]
  }  
}

export const guesserDeriveChoices = (guesser) => {
  let choices = []
  
  if (guesser.choices.length === 0) {
    choices = shuffle(getPermutations(NUMERALS, GUESS_DIGITS_LENGTH))
  }
  else {
    const answer = guesser.choices[0]
    for (let c of guesser.choices) {
      if (equals(scoreCalc(c, answer), guesser.rivalScore)) {
        choices.push(c)
      }
    }
  }

  return {
    type: GUESSER_DERIVE_CHOICES,
    choices 
  }
}

export const guesserCalculateScore = (guess, secret) => {
  return {
    type: GUESSER_CALCULATE_SCORE,
    score: scoreCalc(guess, secret)
  }
}

export const guesserDeduceGuess = (choices) => {
  return {
    type: GUESSER_DEDUCE_GUESS,
    guess: choices[0]
  }
}

export const pressScoreButton = () => {
  return (dispatch, getState) => {
    if (getState().guesser.secret.length === 0) {
      dispatch(guesserThinkUpSecret())
    }
    if (getState().turn === GUESS_TURN) {
      dispatch(
        guesserDeriveChoices(
          getState().guesser
        )
      )
      dispatch(
        guesserDeduceGuess(
          getState().guesser.choices
        )
      )
      dispatch(
        appendGuesses(
          getState().typedDigits, 
          getState().guesser.guess
        )
      )
    }
    else if (getState().turn === SCORE_TURN) {
      dispatch(
        guesserCalculateScore(
          getState().guesser.rivalGuess, 
          getState().guesser.secret
        )
      )
      dispatch(
        appendScores(
          getState().typedDigits, 
          getState().guesser.score
        )
      )
    }

    dispatch({
      type: PRESS_SCORE_BUTTON,
      typedDigits: getState().typedDigits,
      turn: getState().turn
    })
  }
}