import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/missionCard.css';

class MissionCard extends Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card" className='mission-card'>
          <p data-testid="mission-name" className='mission-name'>
            {name}
          </p>
          <div className="container-missions-info">
            <div className='mission-yearCountry'>
              <div className='mission-year'>
              <img src="https://cdn-icons-png.flaticon.com/512/6675/6675182.png" alt="calendar icon" />
                <p data-testid="mission-year">
                  {year}
                </p>
              </div>
              <div className='mission-country'>
                <img src="https://cdn-icons-png.flaticon.com/512/819/819814.png" alt="local icon" />
                <p data-testid="mission-country">
                { country }
                </p>
              </div>
            </div>
            <div className='mission-destination'>
            <img src="https://cdn-icons-png.flaticon.com/512/2530/2530431.png" alt="flag icon" />
              <p data-testid="mission-destination">
                { destination }
              </p>
</div>
          </div>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
