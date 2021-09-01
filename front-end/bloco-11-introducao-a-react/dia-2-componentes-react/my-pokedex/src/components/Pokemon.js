import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
   render() {
       const { pokemon: {name, type, averageWeight, image} } = this.props;
       
    return(
        <section>
            <p>{name}</p>
            <p>{type}</p>
            <p>{averageWeight.value} {averageWeight.measurementUnit}</p>
            <img src = {image} alt = 'pokemon'></img>
        </section>
    );
   };
};

Pokemon.propTypes = {
    pokemonType: PropTypes.shape({
        name: PropTypes.string,
        type: PropTypes.string,
        averageWeight: PropTypes.shape({
            value: PropTypes.number,
            measurementUnit: PropTypes.string,
        }),
        image: PropTypes.string,
    }).isRequired
};

export default Pokemon;
