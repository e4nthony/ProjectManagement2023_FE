/* eslint-disable  */
import style from './message.module.css';
import React from 'react';
import { format, render, cancel, register } from 'timeago.js';
import picture from '../../pictures/profilePic.png';

// eslint-disable-next-line react/prop-types
export default function Message({ message, own }) {
    return (
      <div className={`${style.message} ${own ? style.own : ''}`}>
        <div className={style.messageTop}>
          <img
            className={style.messageImg}
            src={picture}
            alt=""
          />
          <p className={style.messageText}>
            hello,how are you?
            {message.text}
          </p>
        </div>
        <div className={style.messageBottom}>{format(message.createdAt)}</div>
      </div>
    );
  }
  

