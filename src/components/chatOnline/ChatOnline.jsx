import style from './chatOnline.module.css'
import React from 'react';

function ChatOnline () {
    return (
        <div className={style.chatOnline}>
            <div className={style.chatOnlineFriend}>
            <div className={style.chatOnlineImgContainger}>
                <img className={style.chatOnlineImg}
                src='../../../pictures./profilePic.png'
                alt=''/>
                <div className={style.chatOnlineBadge}></div>
            </div>
            </div>
            <span className={style.chatOnlinename}>Jhon Doe</span>
        </div>
    );
}

export default ChatOnline;
