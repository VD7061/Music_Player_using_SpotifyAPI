import React from 'react';
import './login.css'

import { loginEndpoint } from '../../spotifyapi';

const Login = () => {
  return (
    <div className='login-container'>
      <img 
        src='https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg' 
        alt='Spotify Logo' 
        className='logo' 
      />
      <a href={loginEndpoint}>
        <div className='login-btn'>
            Login to Spotify
        </div>
      </a>
    </div>
  );
}

export default Login;
