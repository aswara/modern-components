import React from "react";
import PropTypes from 'prop-types';

function Avatar (props) {
    const { open, onClick, color, children, padding, background, fontSize, borderRadius, shadow, style, card, row } = props

    const widthList = (100 / row) - 5 

    const styleItem = {
        ...style,
        boxShadow: shadow ? '0px 1px 5px lightgray' : '0 0 0 lightgray',
        color: color,
        background: background,
        fontSize: fontSize,
        borderRadius: borderRadius,
        padding: 15,
        width: card ? `${widthList.toString()}%`  : '100%',
        transition: '0.5s',     
    }

    return (
        <div
            style={styleItem}
        >
            {children}
        </div>
    )
}

Avatar.prototype = {
    shadow: PropTypes.bool,    
    padding: PropTypes.number,
    background: PropTypes.string,
    color: PropTypes.string,
    fontSize: PropTypes.number,
    borderRadius: PropTypes.number,
    card: PropTypes.bool,
    row: PropTypes.number
}

Avatar.defaultProps = {
    shadow: false,
    padding: 15,
    background: 'white',
    color: 'black',
    fontSize: 14,
    borderRadius: 5,
    card: false,
    row: 3
}

export default Avatar;