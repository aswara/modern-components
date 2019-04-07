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
            mobile,
            background
        } = this.props

        const { widthWindow } = this.state

        const hide = widthWindow < mobile


        const container = {
            background,
            padding: hide ? 10 : 40,
            transition: '0.5s',
            height: '100%'
        }

        return (
            <div style={container}>
                {children}
            </div>
        );
    }
}

Header.propTypes = {
    shadow: PropTypes.bool,
    height: PropTypes.number,
    widthHover: PropTypes.number,
    mobile: PropTypes.number,
    widthOpen: PropTypes.number,
    background: PropTypes.string,
};

Header.defaultProps = {
    shadow: false,
    height: 60,
    widthHover: 150,
    mobile: 700,
    widthOpen: 200,
    background: 'transparent',
}


export default Header;
