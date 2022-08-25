import React from 'react'
import './testimonials.css'
import CLIENT1 from '../../assets/memory1.png'
import CLIENT2 from '../../assets/memory2.png'
import CLIENT3 from '../../assets/memory3.png'
import CLIENT4 from '../../assets/memory4.png'
import { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const data = [
  {
    avatar: CLIENT1,
    name: 'Ancient Run',
    review: 'Created using Unity, it was my first game app which was deployed to playstore, integrated with ads. Its no more in playstore because of song copywrite but ads still keep playing'  },
  {
    avatar: CLIENT2,
    name: 'BU Syllabus App',
    review: 'This app was created using QT creater, it had all 6 degree section with syllabus and question paper to download directly from Bangalore University website.'  },
  {
    avatar: CLIENT3,
    name: 'SFP Game',
      review: 'Created using Unity, where you get to destroy accessories to gain points.'  },
  {
    avatar: CLIENT4,
    name: 'Frontend + Django admin ',
    review: 'This was a Course website, created using HTML, CSS, JS, and Django. All the user info was stored, displayed and was accessible using Django admin panel(which comes in handy)'  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Memories</h5>
          <h2>Pieces Of My Old Work</h2>
      
      <Swiper className="container testimonials__container"
      modules={[Navigation, Pagination]}
      spaceBetween={20}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {
          data.map(({avatar, name, review}, index) => {
            return(
                <SwiperSlide key={index} className="testimonial">
                    <div className="client__avatar">
                        <img src={avatar} alt="" />  
                    </div>
                    <h3 className="client__name">{name}</h3>
                    <small className='client__review'>{review}</small>
                </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials