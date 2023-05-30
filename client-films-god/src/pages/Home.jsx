import React from 'react';
import { Link } from 'react-router-dom';
import { LastFilms } from '../components/LastFilms/LastFilms';

export const Home = () => {
  return (
    <>
      <h2>Головна сторінка</h2>
      <LastFilms />
    </>
  );
};
