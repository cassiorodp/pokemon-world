import React, { Component } from 'react';

import '../styles/home.css'
import professorOak from '../img/professor-oak.png'
import entei from '../img/entei.png'
import charizard from '../img/charizard.png'
import venusaur from '../img/venusaur.png'
import blastoise from '../img/blastoise.png'

export default class Home extends Component {
  render() {
    return (
      <main data-testid="home-exist" className='main-home'>
        <section className='img-container'>
          <div className='pokemon-top-right'>
            <img className='pokemon-image' src={charizard} alt='charizard' />
            <img className='pokemon-image' src={venusaur} alt='venusaur' />
            <img className='pokemon-image' src={blastoise} alt='blastoise' />
          </div>
          <div className='pokemon-top-left'>
            <img className='pokemon-image' src={entei} alt='entei' />
            <img className='pokemon-image' src='https://cdn2.bulbagarden.net/upload/b/b0/Spr_5b_243.png' alt='raikou' />
            <img className='pokemon-image' src='https://archives.bulbagarden.net/media/upload/6/6a/Spr_5b_245.png' alt='suicune' />
          </div>
          <div className='pokemon-bottom-right'>
            <img className='pokemon-image' src='https://archives.bulbagarden.net/media/upload/5/5d/Spr_5b_032.png' alt='nidoran-m' />
            <img className='pokemon-image' src='https://cdn2.bulbagarden.net/upload/1/16/Spr_5b_033.png' alt='nidorino' />
            <img className='pokemon-image' src='https://archives.bulbagarden.net/media/upload/4/46/Spr_5b_034.png' alt='nidoking' />
          </div>
          <div className='pokemon-bottom-left'>
            <img className='pokemon-image' src='https://cdn2.bulbagarden.net/upload/4/43/Spr_5b_151.png' alt='mew' />
            <img className='pokemon-image' src='https://archives.bulbagarden.net/media/upload/7/73/Spr_5b_150.png' alt='mewtwo' />
            <img className='pokemon-image' src='https://archives.bulbagarden.net/media/upload/9/9f/Spr_5b_251.png' alt='celebi' />
          </div>
          <img className='professor-img' src={professorOak} alt="professor-oak" />
        </section>
        <p className='welcome-text'>
          Welcome to the world of pokemon!
          Here you can find a lot of info about your favorite monster,
          or you can check our pokedex and see all types of pokemon that our pokemon trainer have encountered
        </p>
      </main>
    )
  }
}
