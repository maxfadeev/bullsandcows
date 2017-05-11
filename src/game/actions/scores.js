import shuffle from 'shuffle-array'

import permutations from '../api/permutations'
import scoreCalc from '../api/scoreCalc'
import choices from '../api/choices'

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
  return {
    type: GUESSER_THINK_UP_SECRET,
    secret: shuffle.pick(permutations(NUMERALS, GUESS_DIGITS_LENGTH))
  }  
}

export const guesserDeriveChoices = (guesser) => {
  return {
    type: GUESSER_DERIVE_CHOICES,
    choices: choices(guesser.choices, guesser.choices[0], guesser.rivalScore) 
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