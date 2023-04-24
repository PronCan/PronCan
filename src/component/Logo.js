import React from 'react'
import { Link } from 'react-router-dom';

import '../css/common.scss';

const Logo = () => {
    var url = window.location.pathname;
  return (
    <div className='wrap_logo'>
        <Link to="/">
          <img src={process.env.PUBLIC_URL + '/icon/icon_logo.png'} className='logo'></img>
          {(url === '/PronCan' || url === '/')? <h1>Eunjin's Protfolio</h1>:<h1>EJ</h1>}
        </Link>
    </div>
  )
}

export default Logo