import React, { Component } from "react";

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div>
                <a href="https://github.com/jvit1985">
                    <img src={require('../../assets/logos/github-logo.png')} alt='Github' className='logo'></img>
                </a>
                </div>
                <div>
                <a href="https://www.linkedin.com/in/justin-vititoe-a557b461/">
                    <img src={require('../../assets/logos/linkedin-logo.png')} alt="LinkedIn" className='logo'></img>
                </a>
                </div>
            </footer>
        )
    }
}

export default Footer;