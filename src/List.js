import React, { Component } from 'react';
import PropTypes from 'prop-types';

class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            card: false,
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
            background,
            card
        } = this.props

        const { widthWindow } = this.state

        const hide = widthWindow < mobile


        const container = {
            background,
            transition: '0.5s',
            position: 'relative',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            transition: '0.5s',
        }

        return (
            <div>
                <div>
                    <div onClick={this.handleClick}></div>
                </div>
                <div style={container}>
                    {children}
                </div>
            </div>
        );
    }
}

List.propTypes = {
    shadow: PropTypes.bool,
    height: PropTypes.number,
    widthHover: PropTypes.number,
    mobile: PropTypes.number,
    widthOpen: PropTypes.number,
    background: PropTypes.string,
    card: PropTypes.bool,
};

List.defaultProps = {
    shadow: false,
    height: 60,
    widthHover: 150,
    mobile: 700,
    widthOpen: 200,
    background: 'transparent',
    card: false
}


export default List;
