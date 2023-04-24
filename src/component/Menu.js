import React, { useEffect } from 'react'
import Logo from './Logo'

import '../css/menu.scss';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { isMobile } from 'react-device-detect';

const Menu = () => {
    useEffect(()=> {
        if(isMobile === false) {
            var url = window.location.pathname;
            var menu = document.querySelectorAll(".menu_list li a");
            var counter = document.querySelector('.menu_counter');
            // 체크
            switch(url) {
                case "/": 
                case "/PronCan": 
                menu[0].classList.add('active_menu');
                    break;
                case "/about": 
                case "/about/":
                case "/PronCan/about": 
                case "/PronCan/about/":
                menu[1].classList.add('active_menu');
                counter.innerHTML = "01"
                    break;
                case "/work": 
                case "/PronCan/work": 
                menu[2].classList.add('active_menu');
                counter.innerHTML = "02"
                    break;
            }
        } else {
            var url = window.location.pathname;
            var menu = document.querySelectorAll(".menu_list li");
            // 체크
            switch(url) {
                case "/": 
                case "/PronCan": 
                menu[0].classList.add('active_menu');
                    break;
                case "/about": 
                case "/about/":
                case "/PronCan/about": 
                case "/PronCan/about/":
                menu[1].classList.add('active_menu');
                    break;
                case "/work": 
                case "/PronCan/work": 
                menu[2].classList.add('active_menu');
                    break;
            }
        }
    })
  return (
    <div className='wrap_menu'>
        {
            (isMobile)?<></>:<Logo></Logo>
        }
        <nav>
            <ul className='menu_list'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/work">Work</Link></li>
            </ul>
            {
                (isMobile)?<></>:<p className='menu_counter'>01</p>
            }
        </nav>
        <Footer></Footer>
    </div>
  )
}

export default Menu