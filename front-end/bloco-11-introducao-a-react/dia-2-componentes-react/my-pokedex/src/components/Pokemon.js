import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
   render() {
       const { name, type, averageWeight, image } = this.props.pokemonType
    return (
        <section>
            <h1>{name}</h1>
                <p>{type} {averageWeight}</p>
                <img src = {image} alt = 'pokemon'></img>
        </section>
    );
   };
};

export default Pokemon;

Pokemon.propTypes = {
    pokemonType: PropTypes.shape({
        name: PropTypes.string,
        type: PropTypes.string,
        averageWeight: PropTypes.shape({
            value: PropTypes.number,
            measurementUnit: PropTypes.string,
        }),
        image: PropTypes.string,
    })
}.isRequired
