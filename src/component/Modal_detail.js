import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "../css/modal.scss";
import "../css/swiper.scss";

import { FreeMode, Navigation, Thumbs } from "swiper";

const Modal_detail = (props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { data } = props;

//   console.log("modal_detail data", data);

  return (
    <>
      <div className="wrap_data_content">
      <Swiper
        style={{
          "--swiper-navigation-color": "#276ACE",
          "--swiper-pagination-color": "#276ACE",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 modalSwiper"
      >
        {data.img_src.map((el, key) => {
          return (
            <SwiperSlide>
              <img src={el} />
            </SwiperSlide>
          );
        })}
      </Swiper>
        <h2>{data.title}<span>({data.prod_date}) </span>
        {
            (`${data.src}` === "")? <></> : <button onClick={()=>
            window.open(`${data.src}`, "_blank")}>바로가기</button>
        }
        
        </h2>
      <span className="sub_title_mini">▼ 기여도</span>
      <div className="data_perc_wrap">
        <div className="data_perc" style={{width: `${data.perc}%`}}></div>
      </div>
      <pre>{data.comment}</pre>
      </div>
    </>
  );
};

export default Modal_detail;
