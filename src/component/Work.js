import React, { useContext, useEffect, useState } from 'react'
import Menu from './Menu'
import Modal from './Modal';
import { DataContext } from './Context'

import '../css/work.scss';

const Work = () => {
  const {jsonData} = useContext(DataContext);
  const dev_proj = jsonData.project_dev;
  const [modalOpen, setModalOpen] = useState(false);
  var [idx, setIdx] = useState(0);

  const openModal = (key) => {
    // console.log('open modal')
    setIdx(key);
    setModalOpen(true);
  }
  const closeModal = () => {
    // console.log('close modal')
    setModalOpen(false);
  }

  return (
    <>
      <Menu></Menu>
      <div className="wrap_work">
        <div className='grid_container'>
          {/* <div className='grid_item' style={{backgroundImage: "url(http://proncan.ipdisk.co.kr:8000/list/HDD1/proncan/portfolio/profile_photo.jpg)"}}></div> */}
          {
            dev_proj && dev_proj.map((obj, key)=> {
              return <div className='wrap_grid_item' onClick={()=> openModal(key)} key={key}>
                <div className='grid_item' 
                style={{backgroundImage: `url(${obj.img_src[0]}`, backgroundRepeat: "no-repeat", backgroundSize: "fill"}}>
                </div>
                <pre className='grid_item_title'>{obj.title}</pre>
              </div>
            })
          }
        </div>
        <Modal open={modalOpen} close={closeModal} header={dev_proj[idx].title} data={dev_proj[idx]}></Modal>
      </div>
    </>
  )
}

export default Work