import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
        }
        window.addEventListener("resize", this.update);
    }


    componentDidMount() {
        this.update();
    }

    update = () => {
        this.setState({
            heightWindow: window.innerHeight,
            widthWindow: window.innerWidth,
            open: false
        });
    };


    render() {
        const {
            children,
            height,
            mobile,
            background,
            right,
            left,
            shadow,
            hoverSidebar,
            widthHover,
            widthSidebar
        } = this.props

        const { open, widthWindow } = this.state

        const hide = widthWindow < mobile

        const heightHeader = height

        const wrapper = {
            top: 0,
            position: 'fixed',
            width: hide ? widthWindow : hoverSidebar ? widthWindow - widthHover : widthWindow - widthSidebar,
            height: heightHeader,
            background: background,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            transition: '0.5s',
            zIndex: 98,
            alignItems: 'center',
            boxShadow: shadow ? '1px 0 5px lightgray' : '0 0 0 lightgray',
        }


        const container = {
            marginTop: heightHeader,
            transition: '0.5s'
        }

        const styleLeft = {
            position: 'relative',
            marginLeft: hide ? 60 : 20
        }

        const styleRight = {
            position: 'relative',
            marginRight: hide ? 15 : 30
        }

        return (
            <div>
                <div
                    style={wrapper}
                >
                    <div style={styleLeft}>
                        {left}
                    </div>
                    <div style={styleRight}>
                        {right}
                    </div>
                </div>
                <div style={container}>
                    {children}
                </div>
            </div>
        );
    }
}

Header.propTypes = {
    shadow: PropTypes.bool,    
    height: PropTypes.number,
    widthHover: PropTypes.number,
    mobile: PropTypes.number,
    widthSidebar: PropTypes.number,
    background: PropTypes.string,
};

Header.defaultProps = {
    shadow: false,
    height: 60,
    widthHover: 150,
    mobile: 700,
    widthSidebar: 0,
    background: 'white',
}


export default Header;
