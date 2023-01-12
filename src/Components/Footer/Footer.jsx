import React from 'react';
import { Link } from 'react-router-dom';

import "./Footer.css"

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="footer__nav">
                    <Link className='footer__nav-link' to={'/'}>Biz haqimizda</Link>
                    <Link className='footer__nav-link' to={'/'}>Kontaktlar</Link>
                    <Link className='footer__nav-link' to={'/'}>Foydalanish shartlari</Link>
                </div>

                <div className="footer__bottom">
                    <p className='footer__bottom-text'>Yordam xizmati: +998 71 200 40 01</p>
                    <div className="footer__bottom-social">
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-facebook-f"></i>
                        <i class="fa-brands fa-telegram"></i>
                        <p className='footer__bottom-text'>Ⓒ 2023 Express24</p>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Footer;