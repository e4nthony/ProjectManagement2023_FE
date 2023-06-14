import style from './chatOnline.module.css'
import React from 'react';
import picture from '../../pictures/profilePic.png';

function ChatOnline () {
    return (
      <div className={style.chatOnline}>
        <div className={style.chatOnlineFriend}>
          <div className={style.chatOnlineImgContainger}>
            <img
              className={style.chatOnlineImg}
              src={picture}
              alt=''
            />
            <div className={style.chatOnlineBadge} />
          </div>
        </div>
        <span className={style.chatOnlinename}>Jhon Doe</span>
      </div>
    );
}

export default ChatOnline;
