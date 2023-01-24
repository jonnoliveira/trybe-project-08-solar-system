import React, { Component } from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system" className="solarSystem">
        <div className="title">
          <Title headline="Planetas" />
        </div>
        <div className="line" />
        <div className="planets">
          {planets
            .map((planet) => {
              const { name, image } = planet;
              return (<PlanetCard
                key={ name }
                planetName={ name }
                planetImage={ image }
              />);
            })}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
