import React from 'react'
import './testimonials.css'
import CLIENT1 from '../../assets/client2.png'
import { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';   

const data = [
  {
    avatar: CLIENT1,
    name: 'Naina Fatima',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae consequuntur minima, molestiae et libero doloribus reiciendis quod porro suscipit, quibusdam, nobis optio incidunt provident praesentium deleniti culpa amet rem quidem!',
  },
  {
    avatar: CLIENT1,
    name: 'Khadija',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae consequuntur minima, molestiae et libero doloribus reiciendis quod porro suscipit, quibusdam, nobis optio incidunt provident praesentium deleniti culpa amet rem quidem!',
  },
  {
    avatar: CLIENT1,
    name: 'Kubra',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae consequuntur minima, molestiae et libero doloribus reiciendis quod porro suscipit, quibusdam, nobis optio incidunt provident praesentium deleniti culpa amet rem quidem!',
  },
  {
    avatar: CLIENT1,
    name: 'Afreen',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae consequuntur minima, molestiae et libero doloribus reiciendis quod porro suscipit, quibusdam, nobis optio incidunt provident praesentium deleniti culpa amet rem quidem!',
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      
      <Swiper className="container testimonials__container"
      modules={[Navigation, Pagination]}
      spaceBetween={40}
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
                <h5 className="client__name">{name}</h5>
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