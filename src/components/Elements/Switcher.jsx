import React from 'react';
import { NavLink } from 'react-router-dom';

const skins = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

class Switcher extends React.Component {

    constructor(props) {
        super(props);
        this.handleSwitchSkin.bind(this);
        this.state = { stylePath: './assets/css/skin/skin-1.css' };
    }

    componentDidMount = () => {
        var homepage2 = /\/home-2/i;

        if (homepage2.test(window.location.href)) {
            document.body.classList.add('footer-fixed');
        } else {
            document.body.classList.remove('footer-fixed');
        } 
        this.setState({ stylePath: './assets/css/skin/skin-1.css' });

    }

    state = { isSwitchActive: false };

    handleSwitchToggle = () => {
        this.setState({ isSwitchActive: !this.state.isSwitchActive });
    };

    handleSwitchSkin = (skinitem) => {

        const skin = skinitem.item;

        if (skin === 1) {
            this.setState({ stylePath: './assets/css/skin/skin-1.css' });
        } else if (skin === 2) {
            this.setState({ stylePath: './assets/css/skin/skin-2.css' });
        } else if (skin === 3) {
            this.setState({ stylePath: './assets/css/skin/skin-3.css' });
        } else if (skin === 4) {
            this.setState({ stylePath: './assets/css/skin/skin-4.css' });
        } else if (skin === 5) {
            this.setState({ stylePath: './assets/css/skin/skin-5.css' });
        } else if (skin === 6) {
            this.setState({ stylePath: './assets/css/skin/skin-6.css' });
        } else if (skin === 7) {
            this.setState({ stylePath: './assets/css/skin/skin-7.css' });
        } else if (skin === 8) {
            this.setState({ stylePath: './assets/css/skin/skin-8.css' });
        } else if (skin === 9) {
            this.setState({ stylePath: './assets/css/skin/skin-9.css' });
        } else if (skin === 10) {
            this.setState({ stylePath: './assets/css/skin/skin-10.css' });
        }

    };

    render() {
        const isSwitchActive = this.state.isSwitchActive;

        return (
            <>
                <link rel="stylesheet" type="text/css" href={this.state.stylePath} />
            </>
        );
    };
};

export default Switcher;