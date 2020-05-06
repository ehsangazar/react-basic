import React from 'react'
import PropTypes from 'prop-types'
const Image = ({ imgSrc, alt='' }) => <img alt={alt} src={imgSrc} />;

Image.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    alt: PropTypes.string
}

export default Image;