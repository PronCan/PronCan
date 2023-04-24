import React, { useEffect } from 'react'

import BgWrap from './BgWrap'

import '../css/index.scss';
import About from './About';
import Skill from './Skill';
import Project from './Project';

const Index = () => {

  fetch("../data/data.json")
  .then((res)=> {
    console.log("res", res.json())
  })
  .then((data) => {
    console.log("data", data)
  })
  
  return (
    <>
    <BgWrap name="Index"></BgWrap>
      <div className='wrap_index'>
        <div className='wrap_title'>
          <img src={require("../img/temp2.png")} alt='title' className={'profile'}></img>
        </div>
        <About className="index_section about"></About>
        <Skill className="index_section"></Skill>
        <Project className="index_section"></Project>
      </div>
    </>
  )
}

export default Index