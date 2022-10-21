import React, { Component } from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {missions
          .map((mission, index) => {
            const { name, year, country, destination } = mission;
            return (
              <MissionCard
                key={ index }
                name={ name }
                year={ year }
                country={ country }
                destination={ destination }
              />
            );
          })}
      </div>
    );
  }
}

export default Missions;
