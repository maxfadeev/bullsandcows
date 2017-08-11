import React from 'react'

import '../styles/gameRules.css'

const GameRules = ({ onClick, isTextVissible, visibilityLinkText }) =>
  <div className="game-rules">
    <a
      href=""
      onClick={e => {
        e.preventDefault()
        onClick()
      }}
    >
      {visibilityLinkText + ' rules'}
    </a>
    <div className={isTextVissible ? 'visible' : 'hidden'}>
      <p>
        Bulls and Cows is an old, numerical version of code-breaking game for
        two players.
      </p>
      <p>
        It is played with 4 digits. The digits must be all different. Then, in
        turn, players try to guess their opponent's number who gives the number
        of matches. If the matching digits are in their right positions, they
        are "bulls"(green circle here), if in different positions, they are
        "cows"(orange circle here).
      </p>
      <p>The first one to reveal the other's secret number wins the game.</p>
      <p>You must follow rules listed below:</p>
      <ul>
        <li>Zero can not be used as a first numeral of the whole number</li>
        <li>Same numeral can not be used twice</li>
        <li>Quantity of numerals must be 4, not more, not less</li>
        <li>You type your guess, then opponent's matching by turns</li>
      </ul>
    </div>
  </div>

export default GameRules
