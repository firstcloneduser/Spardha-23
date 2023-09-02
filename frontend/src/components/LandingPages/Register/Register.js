import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';
import styles from './Register.module.css';
import Img1 from '../Home/Images/bg.webp';
import Img2 from '../Home/Imgages/bg.png';

function Register() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('token')) navigate('/dashboard/home');
  }, [navigate]);

  return (
    <div className={`${styles.container}`} id="register">
      <div className={`${styles.card}`}>
        <Outlet />
      </div>
    </div>
  );
}

export default Register;
