import React from 'react';
import styles from './LastFilm.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

import { useDispatch, useSelector } from 'react-redux';

import { fetchLastFilms } from '../../redux/slices/HomeSlice';

export const LastFilms = () => {
  const dispatch = useDispatch();
  const { lastFilms } = useSelector((state) => state.films);
  const films = lastFilms.items.map((item, index) => {
    return item.film.replace(/\\/g, '/');
  });
  const encodedURL = encodeURIComponent(films);
  React.useEffect(() => {
    dispatch(fetchLastFilms());
  }, []);
  return (
    <>
      <h3 className={styles.header}>Нові фільми</h3>
      <Swiper
        className={styles.swiper}
        slidesPerView={5}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        {lastFilms.items.map((item, index) => (
          <SwiperSlide className={styles.swiperSlide}>
            <video controls>
              <source src={encodedURL} type='video/mp4' />
            </video>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
