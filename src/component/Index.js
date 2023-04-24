import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

import Footer from './Footer';

import '../css/index.scss';
import Logo from './Logo';
import { keyboard } from '@testing-library/user-event/dist/keyboard';

const Index = () => {
  useEffect(()=> {
    let btn = document.querySelector('.wrap_right');
    btn.addEventListener('mousemove', e => {
      e.stopImmediatePropagation();
      let rect = e.target.getBoundingClientRect();
      let cname = e.target.className
      let x = e.clientX - rect.left;
      let y = e.clientY - rect.top;
      if(cname != "wrap_right") {
        let _x = e.target.offsetLeft;
        let _y = e.target.offsetTop;
        x = (e.clientX + _x) - rect.left ;
        y = (e.clientY + _y) - rect.top ;
      }
      btn.style.setProperty('--x', x + 'px');
      btn.style.setProperty('--y', y + 'px');
    }, true);
  })
  
  return (
    <div className="wrap_index">
      <div className='wrap_left'>
        <Logo></Logo>
        <div className='wrap_middle'>
          <div>
            <h2>Lee Eun Jin</h2>
            <p>Web Frontend</p>
          </div>
          <div className='wrap_middle_sec'>
            <p>PORTFOLIO.</p>
          </div>
        </div>
        <Footer></Footer>
        <p className='index_vertical_text'>@PronCan</p>
      </div>
      <div className='wrap_right'>
        <div className='wrap_right_about'>
          <p className='wrap_right_text'><Link to="/about">ABOUT</Link></p>
        </div>
        <div className='wrap_right_work'>
          <p className='wrap_right_text'><Link to="/work" className='work_text'>WORK</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Index