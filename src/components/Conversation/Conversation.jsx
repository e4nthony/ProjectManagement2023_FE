/* eslint-disable react/prop-types */
import authService from '../../services/authService';
import style from './Conversation.module.css'
import React, { useEffect, useState } from 'react';
import picture from '../../pictures/profilePic.png'

export default function Conversation ({ conversation, currentUser }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const friendId = conversation.members.find((m) => m !== currentUser._id);

        const getUser = async () => {
            try {
                const res = await authService.get_user_info_by_id(friendId);
                setUser(res.data.user_info);
            } catch (err) {
                console.log(err);
            }
        };
        getUser();
    }, [currentUser, conversation]);

    return (
      <div className={style.conversation}>
        <img
          className={style.conversationImg}
          src={picture}
          alt=''
        />
        <span className={style.conversationName}>{user && user.userName}</span>
      </div>
    );
}
