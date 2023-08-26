import { createIconsArray } from './utils.js'

export const startGame = (difficult) => {
  let firstCard = null
  let secondCard = null
  let clickable = true

  const gameSection = document.querySelector('.game-section__container')
  const gameTable = document.createElement('div')
  const cardsIcons = createIconsArray(difficult)
}
