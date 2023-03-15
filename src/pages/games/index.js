import React from 'react'
import KeetContainer from '../index.js'
import './games.css';

const Index = () => {
  return (
    <KeetContainer>
      <div class="gameContainer">
        <h1 class="title">Spellen</h1>
        <div class="cardWrapper">
          <div class="cardTitle">
            Driemans
          </div>
          <div class="test">
            {'>'}
          </div>
        </div>
        <div class="cardWrapper">
          <div class="cardTitle">
            Kingzen
          </div>
        </div>
        <div class="cardWrapper">
          <div class="cardTitle">
            Maxen
          </div>
        </div>
      </div>
    </KeetContainer>
  )
}

export default Index;