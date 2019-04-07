import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BurgerIcon from './BurgerIcon';

class Sidebar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hover: false,
            open: false,
            activeLink: props.active,
            hoverLink: null
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

    handlePush = (menu) => {
        const { onClickLink } = this.props
        this.setState({
            activeLink: menu.to
        })

        if (onClickLink) {
            onClickLink(menu)
        }
    }

    handleHoverLink = (menu) => {
        this.setState({
            hoverLink: menu.to
        })
    }

    renderChildren = () => {
        const { showLabel, widthHover, width } = this.props
    return React.Children.map(this.props.children, child =>
        React.cloneElement(child, { 
            hoverSidebar: showLabel ? this.state.hover : false, 
            widthSidebar: width, 
            widthHover: widthHover }));
    }

    render() {
        const {
            width,
            showLabel,
            styleLabel,
            widthHover,
            mobile,
            widthOpen,
            background,
            colorActive,
            menus,
            logo,
            colorBurger,
            shadow
        } = this.props

        const { hover, open, widthWindow, activeLink, hoverLink } = this.state

        const hide = widthWindow < mobile

        const widthSide = showLabel && hover ? widthHover : width

        const wrapper = {
            top: 0,
            position: 'fixed',
            height: '100%',
            width: widthSide,
            background: background,
            display: 'flex',
            flexDirection: 'column',
            transition: '0.5s',
            zIndex: 100,
            boxShadow: shadow ? '1px 0 5px lightgray' : '0 0 0 lightgray',
        }

        const wrapperHide = {
            top: 0,
            paddingTop: 50,
            left: open ? 0 : -widthOpen,
            position: 'fixed',
            height: '100%',
            width: widthOpen,
            background: background,
            display: 'flex',
            flexDirection: 'column',
            transition: '0.5s',
            zIndex: 100
        }

        const styleLink = {
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            padding: '15px 0',
            cursor: 'pointer',
            position: 'relative',
            marginBottom: 5,
        }


        const styleMenu = {
            ...styleLink
        }

        const styleMenuActive = {
            ...styleLink,
            color: colorActive
        }

        const styleActive = {
            height: '100%',
            position: 'absolute',
            width: 4,
            background: colorActive,
            left: 0,
            borderRadius: '0 10px 10px 0',
        }

        const container = {
            marginLeft: hide ? 0 : widthSide,
            transition: '0.5s'
        }

        const styleBlock = {
            position: 'fixed',
            zIndex: 99,
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            background: 'rgba(0, 0, 0, 0.5)'
        }

        const button = {
            position: 'fixed',
            zIndex: 101,
            top: 15,
            left: 15,
        }

        const styleLogo = {
            marginTop: hide ? -50 : 0,
            marginBottom: 10,
            height: width,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }

        return (
            <div>
                <div onClick={() => this.setState({ open: false })} style={open ? styleBlock : {}}></div>
                {
                    hide &&
                    <div style={button}>
                        <BurgerIcon
                            color={colorBurger}
                            open={open}
                            onClick={() => this.setState({ open: !open })}
                        />
                    </div>
                }

                <div
                    style={hide ? wrapperHide : wrapper}
                    onMouseEnter={() => this.setState({ hover: true })}
                    onMouseLeave={() => this.setState({ hover: false, hoverLink: null })}
                >

                    <div style={styleLogo}>
                        <span>{logo}</span>
                    </div>
                    
                    {
                        menus.map((menu, i) =>
                            <div
                                onMouseEnter={() => this.handleHoverLink(menu)}
                                onClick={() => this.handlePush(menu)}
                                key={i}
                                style={activeLink === menu.to || hoverLink === menu.to ? styleMenuActive : styleMenu}
                            >
                                <span style={{ marginLeft: 20 }}>{menu.icon}</span>
                                <span style={styleLabel}>
                                    {!open && showLabel && hover && menu.label} {hide && open && menu.label}
                                </span>
                                {
                                    activeLink === menu.to || hoverLink === menu.to ?
                                        <span style={styleActive}></span>
                                        : null
                                }
                            </div>
                        )
                    }
                </div>
                <div style={container}>
                    {this.renderChildren()}
                </div>
            </div>
        );
    }
}

Sidebar.propTypes = {
    shadow: PropTypes.bool,
    width: PropTypes.number,
    widthHover: PropTypes.number,
    mobile: PropTypes.number,
    widthOpen: PropTypes.number,
    background: PropTypes.string,
    colorActive: PropTypes.string,
    colorBurger: PropTypes.string,
    active: PropTypes.string,
    showLabel: PropTypes.bool,
    menus: PropTypes.array,
    styleLabel: PropTypes.object,
};

Sidebar.defaultProps = {
    shadow: false,
    width: 60,
    widthHover: 150,
    mobile: 700,
    widthOpen: 200,
    background: 'white',
    colorActive: '#2B43A4',
    colorBurger: '#2B43A4',
    showLabel: true,
    logo: 'AS',
    active: 'dashboard',
    styleLabel: {
        marginLeft: 10,
        fontSize: 14,
        fontWeight: 550,
    },
    menus: [
        {
            to: 'dashboard',
            label: 'Dashboard',
            icon: 'D',
        }, {
            to: 'user',
            label: 'User',
            icon: 'U'
        }
    ]
}


export default Sidebar;
