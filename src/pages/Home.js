import React from 'react';
import Search from '../components/Search';
import { Link } from 'react-router-dom';
import { Apps } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import '../css/Home.css';

const Home = () => {
  return (
    <div className='home'>
      <div className='home__header'>
        <div className='home__headerLeft'>
          <Link to='/about'>About</Link>
          <Link to='/store'>Store</Link>
        </div>
        <div className='home__headerRight'>
          <Link to='/gmail'>Gmail</Link>
          <Link to='/images'>Images</Link>
          <Apps />
          <Avatar />
        </div>
      </div>
      <div className='home__body'>
        <img
          src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
          alt='google logo'
        />
        <div className='home__inputContainer'>
          <Search />
        </div>
      </div>
    </div>
  );
};

export default Home;
