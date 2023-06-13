<<<<<<< HEAD
/* eslint-disable react/prop-types */
import './message.module.css';
=======
/* eslint-disable  */
import style from './message.module.css';
>>>>>>> 1ac838bd0952baddf2572013c6952c5c4ec5f10e
import React from 'react';
// import { format } from 'timeago'


// eslint-disable-next-line react/prop-types
export default function Message({ message, own }) {
    return (
      <div className={`${style.message} ${own ? style.own : ''}`}>
        <div className={style.messageTop}>
          <img
            className={style.messageImg}
            src="../../logo.svg"
            alt=""
          />
          <p className={style.messageText}>
            {message.text}
          </p>
        </div>
        <div className={style.messageBottom}>
          {message.createdAt}
        </div>
      </div>
    );
  }
  

