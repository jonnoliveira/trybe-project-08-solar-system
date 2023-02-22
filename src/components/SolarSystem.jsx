import React, { Component } from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/solarSystem.css';

function SolarSystem() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
    return (
      <div data-testid="solar-system" className="solarSystem">
        <div className="title">
          <Title headline="Planetas" />
        </div>
        <div className="line" />
          <Slider { ...settings } className='slider'>
            {planets
              .map((planet) => {
                const { name, image } = planet;
                return (<PlanetCard
                  key={ name }
                  planetName={ name }
                  planetImage={ image }
                />);
              })}
          </Slider>
      </div>
    );
  }

export default SolarSystem;
