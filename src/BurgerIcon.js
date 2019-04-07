import React from "react";

export default function BurgerIcon (props) {
    const { open, onClick, color } = props

    const button = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        cursor: 'pointer'
    }

    const iconStick = {
        height: 4,
        borderRadius: 1, 
        background: color || 'grey',
        transition: '1s',
        marginLeft: open ? -5 : 0
    }
    
    const iconStick1 = {
        ...iconStick,
        transform: open ? 'rotate(315deg)' : 'rotate(0deg)',
        marginBottom: open ? -5 : 5,
        marginTop: open ? 5 : 0,
        width: 30,
    }

    const iconStick2 = {
        ...iconStick,
        transform: open ? 'rotate(380deg)' : 'rotate(0deg)',
        width: open ? 0 : 30,
        marginBottom: open ? 0 : 5,
        marginTop: open ? -3 : 0
    }

    const iconStick3 = {
        ...iconStick,
        transform: open ? 'rotate(225deg)' : 'rotate(0deg)',
        marginBottom: open ? 0 : 5,
        width: 30,
    }
    return (
        <div
            style={button}
            onClick={onClick}
        >
            <div style={iconStick1}></div>
            <div style={iconStick2}></div>
            <div style={iconStick3}></div>
        </div>
    )
}