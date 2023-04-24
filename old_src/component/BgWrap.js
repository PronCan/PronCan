import React from 'react'
import { Link } from 'react-router-dom';

import '../css/common.scss';

const BgWrap = (props) => {
  return (
    <>
      <div className='left_area'>
        <p>PPP</p>
       <ul className='left_menu'>
        <li>Profile</li>
        <ul className='left_menu_sub'>
          <li>About</li>
          <li>Skill</li>
          <li>Activity</li>
        </ul>
        <li>Project</li>
        <ul className='left_menu_sub'>
          <li>Web</li>
          <li>Moblie</li>
          <li>Etc</li>
        </ul>
        <div className='white_line'></div>
        <ul className='left_menu_sub'>
          <li>2023</li>
          <li>2022</li>
        </ul>
       </ul>
      </div>
    </>
  )
}

export default BgWrap