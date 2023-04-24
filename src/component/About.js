import React, { useContext } from 'react'
import { DataContext } from './Context'

import 'swiper/css';
import '../css/about.scss';
import Menu from './Menu';

const About = () => {
  const {jsonData} = useContext(DataContext);
  const info = jsonData.info;
  const skill = jsonData.skill;

  return (
    <>
      <Menu></Menu>
      <div className="wrap_about">
        <div className="wrap_info">
          <div>
            <p className='wrap_info_title'>프로필</p>
            <div className='wrap_info_content'>
              {/* <img src='/about/icon_mail.png' alt="icon_mail"></img> */}
              <p>{info.name}({info.eng_name})</p>
            </div>
            <div className='wrap_info_content'>
              {/* <img src='/about/icon_mail.png' alt="icon_mail"></img> */}
              <p>{info.birth}</p>
            </div>
            <div className='wrap_info_content'>
              {/* <img src='/about/icon_mail.png' alt="icon_mail"></img> */}
              <p>Email: {info.email}</p>
            </div>
            <div className='wrap_info_content'>
              {/* <img src='/about/icon_github.png' alt="icon_github"></img> */}
              <p>Github: {info.github}</p>
            </div>
          </div>
          <div>
            <p className='wrap_info_title'>학력</p>
            {
              info.edu.map((obj)=> {
                return <div className='wrap_info_content'>
                  <p>{obj.title} ({obj.years})</p>
                </div>
              })
            }
          </div>
          <div>
            <p className='wrap_info_title'>경력</p>
            {
              info.career.map((obj)=> {
                return <div>
                  <div className='wrap_info_content'>
                    <p>{obj.comp_name} ({obj.date})</p>
                  </div>
                  <pre>{obj.comment}</pre>
                </div>
              })
            }
          </div>
          <div>
            <p className='wrap_info_title'>자격증</p>
            {
              info.cert.map((obj)=> {
                return <div>
                  <div className='wrap_info_content'>
                    <p>{obj.name} ({obj.get_date})</p>
                  </div>
                  <pre>{obj.get_name}</pre>
                </div>
              })
            }
          </div>
          <div>
            <p className='wrap_info_title'>교육이수사항</p>
            {
              info.hrd.map((obj)=> {
                return <div>
                  <div className='wrap_info_content'>
                    <p>{obj.name}</p>
                  </div>
                  <pre>({obj.date}) / {obj.place}</pre>
                </div>
              })
            }
          </div>
        </div>
        <div className="wrap_info">
          <div className='wrap_info_title_p'>
            <p className='wrap_info_title'>기술</p>
          </div>
            {
              skill.map((obj)=> {
                return <div style={{margin: 0, flexGrow: 1}}>
                  <div className='wrap_about_skill'>
                    {/* <img src='/icon/icon_html.png'></img> */}
                      <img src={process.env.PUBLIC_URL + obj.src}></img>
                      <div className='wrap_skill_text'>
                        <p>{obj.name}</p>
                        <pre>{obj.alt}</pre>
                      </div>
                  </div>
                </div>
              })
            }
            </div>
          </div>
    </>
  )
}

export default About