import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import '../App.css'


function Slider() {
  return (
    <div style={{ height: '650px'}}>
      <Swiper
        direction="vertical"
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        style={{ height: '100%' }}
      >
        <SwiperSlide>
          <div style={{ position: 'relative', height: '100%' }}>
            <img
              src='/slider1.png'
              alt="Banner 1"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '10%',
                transform: 'translateY(-50%)',
                color: 'white',
                textShadow: '0 2px 4px rgba(0,0,0,0.6)',
              }}
            >
              <h2 className='font-russo ' style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Premium Industrial Tools Exported from India
</h2>
              <p className='font-exo2' style={{ fontSize: '1.2rem' }}>Count on us for high-performance pipe, plumbing, and safety tools—engineered in India, trusted across Russia.
</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div style={{ position: 'relative', height: '100%' }}>
            <img
              src='/slider2.png'
              alt="Banner 2"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '10%',
                transform: 'translateY(-50%)',
                color: 'white',
                textShadow: '0 2px 4px rgba(0,0,0,0.6)',
              }}
            >
              <h2 className='font-russo '  style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Built for Oil & Gas Demands</h2>
              <p className='font-exo2' style={{ fontSize: '1.2rem' }}>Our specialized oil and gas tools deliver rugged durability and precision for Russia’s toughest conditions.
</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;
