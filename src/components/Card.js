import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Card extends Component {
  render() {
    return (
      <div className="card-results">
        <img
          src={
            this.props.image !== 'N/A'
              ? this.props.image
              : 'https://cef.org.au/wp-content/uploads/2018/07/Image-Coming-Soon-Placeholder.jpg'
          }
          alt={`${this.props.heading} poster`}
        ></img>
        <div className="card-info">
          <h3 className="primary">{this.props.heading}</h3>
          <body className="grey">{this.props.subtitle}</body>
          <h6 className="secondary bottom">{this.props.callout}</h6>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  image: PropTypes.string,
  heading: PropTypes.string,
  subtitle: PropTypes.string,
  callout: PropTypes.string
};

export default Card;
