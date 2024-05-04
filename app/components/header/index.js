import React from 'react';
import Image from 'next/image';

import './style.scss';

const Header = (props) => {
    return (
        <div className='header' >
            <Image src='/logo_white.svg' alt='Logo' style={{ width: '40%', maxWidth: '200px' }} width={200} height={200} />
            <div className='header_buttons'>
                <Contact />
                <Menu />
            </div>
        </div >
    );
}

function Contact() {
    return (
        <button className="getstarted_button button__container">
            <input type="checkbox" id="getstarted_trigger" className="getstarted_button__trigger_checkbox" />
            <label htmlFor="getstarted_trigger" className="getstarted_button__trigger_label">
                <span className="getstarted_button__text">Get Started</span>
                <span className="getstarted_button__phone">Contact</span>
            </label>
        </button>
    );
}

const Menu = () => {
    const handleClick = () => {
        document.getElementById('menu_trigger').click();
    };

    return (
        <button className="menu_button button__container">
            <div className='bounds' onClick={handleClick}></div>
            <input type="checkbox" id="menu_trigger" className="menu_button__trigger_checkbox" />
            <label htmlFor="menu_trigger" className="menu_button__trigger_label">
                <svg className="menu_button__icon" viewBox="0 0 55 55">
                    <circle className="menu_button__icon_bg" opacity="0.9" cx="27.5" cy="27" r="27" />
                    <line className="menu_button__icon_line menu_button__icon_line_bottom" x1="18.8999" y1="35.1499" x2="35.9999" y2="35.1499" stroke="rgb(255, 255, 255)" strokeWidth="3.5" />
                    <line className="menu_button__icon_line menu_button__icon_line_top" x1="22.5" y1="18.95" x2="36" y2="18.95" stroke="rgb(255, 255, 255)" strokeWidth="3.5" />
                    <line className="menu_button__icon_line menu_button__icon_line_middle" x1="15.3" y1="27.05" x2="36" y2="27.05" stroke="rgb(255, 255, 255)" strokeWidth="3.5" />
                </svg>
            </label>
        </button>
    );
};

export default Header;