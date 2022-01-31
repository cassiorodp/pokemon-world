import React, { Component } from 'react';

import '../styles/home.css'
import professorOak from '../img/professor-oak.png'
import entei from '../img/entei.png'
import charizard from '../img/charizard.png'
import venusaur from '../img/venusaur.png'
import blastoise from '../img/blastoise.png'
import raikou from '../img/blastoise.png'
import suicune from '../img/suicune.png'
import nidoram from '../img/nidoram.png'
import nidorino from '../img/nidorino.png'
import nidoking from '../img/nidorino.png'
import mew from '../img/nidorino.png'
import mewtwo from '../img/mewtwo.png'
import celebi from '../img/celebi.png'

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
            <img className='pokemon-image' src={raikou} alt='raikou' />
            <img className='pokemon-image' src={suicune} alt='suicune' />
          </div>
          <div className='pokemon-bottom-right'>
            <img className='pokemon-image' src={nidoram} alt='nidoran-m' />
            <img className='pokemon-image' src={nidorino} alt='nidorino' />
            <img className='pokemon-image' src={nidoking} alt='nidoking' />
          </div>
          <div className='pokemon-bottom-left'>
            <img className='pokemon-image' src={mew} alt='mew' />
            <img className='pokemon-image' src={mewtwo} alt='mewtwo' />
            <img className='pokemon-image' src={celebi} alt='celebi' />
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
