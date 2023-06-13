/* eslint-disable  */
import style from './message.module.css';
import React from 'react';
import { format, render, cancel, register } from 'timeago.js';


// eslint-disable-next-line react/prop-types
export default function Message({ message, own }) {
    return (
      <div className={`${style.message} ${own ? style.own : ''}`}>
        <div className={style.messageTop}>
          <img
            className={style.messageImg}
            src="./profilePic.png"
            alt=""
          />
          <p className={style.messageText}>
            {message.text}
          </p>
        </div>
        <div className={style.messageBottom}>{format(message.createdAt)}</div>
      </div>
    );
  }
  

