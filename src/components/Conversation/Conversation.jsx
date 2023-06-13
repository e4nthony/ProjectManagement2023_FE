/* eslint-disable react/prop-types */
import authService from '../../services/authService';
import './Conversation.module.css'
import React, { useEffect, useState } from 'react';

export default function Conversation ({ conversation, currentUser }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const friendId = conversation.members.find((m) => m !== currentUser._id);
        // const PF = process.env.REACT_APP_PUBLIC_FOLDER;

        const getUser = async () => {
            try {
                const res = await authService.get_user_info_by_id(friendId);
                setUser(res.data.user_info);
            } catch (err) {
                console.log(err);
            }
        };
        getUser()
    }, [currentUser, conversation]);
    return (
        <div className="conversation.css">
            <img
              className="conversationImg"
              src="pictures/profilePic.png"
              alt=""
            />
            <span className="conversationName">{user.userName}</span>
        </div>
    )
}
