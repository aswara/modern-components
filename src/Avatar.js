import React from "react";
import PropTypes from 'prop-types';

function Avatar (props) {
    const { open, onClick, color, children, height, background, fontSize } = props

    const styleAvatar = {
        color: color,
        background: background,
        fontSize: fontSize,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        cursor: 'pointer',
        justifyContent: 'center',
        borderRadius: '50%',
        height: height,
        width: height
    }

    return (
        <div
            style={styleAvatar}
            onClick={onClick}
        >
            {children}
        </div>
    )
}

Avatar.prototype = {
    height: PropTypes.number,
    background: PropTypes.string,
    color: PropTypes.string,
    fontSize: PropTypes.number
}

Avatar.defaultProps = {
    height: 50,
    background: 'gray',
    color: 'white',
    fontSize: 20
}

export default Avatar;