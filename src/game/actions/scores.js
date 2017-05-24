import shuffle from 'shuffle-array'

import permutations from '../api/permutations'
import scoreCalc from '../api/scoreCalc'
import choices from '../api/choices'

import { 
  NUMERALS, 
  GUESS_DIGITS_LENGTH
} from '../constants/Game'

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

export const guesserDeriveChoices = (prevChoices, score) => {
  return {
    type: GUESSER_DERIVE_CHOICES,
    choices: choices(prevChoices, prevChoices[0], score) 
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

export const makeGuess = () => {
  return (dispatch, getState) => {
    if (getState().guesser.secret.length === 0) {
      dispatch(guesserThinkUpSecret())
    }
    dispatch(
      guesserDeriveChoices(
        getState().guesser.choices,
        getState().guesser.rivalScore
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
}

export const calculateScore = () => {
  return (dispatch, getState) => {
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
}

export const pressScoreButton = () => {
  return {
    type: PRESS_SCORE_BUTTON
  }
}