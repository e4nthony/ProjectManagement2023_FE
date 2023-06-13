<<<<<<< HEAD
/* eslint-disable */
import Message from '../../message/Message';
import Conversation from '../../Conversation/Conversation'
import './Messenger.module.css';
=======
/* eslint-disable  */

import Message from '../../message/Message';
import Conversation from '../../Conversation/Conversation'
import style from './Messenger.module.css';
>>>>>>> 8f09bbe1ce6512c9197c78bc1388d9214569b796
import React, { useState, useEffect, useRef } from 'react';
import ChatOnline from '../../chatOnline/ChatOnline';
import authService from '../../../services/authService';
import { io } from 'socket.io-client';



<<<<<<< HEAD
function Messenger() {
=======
    function Messenger () {
>>>>>>> 8f09bbe1ce6512c9197c78bc1388d9214569b796
    const [conversation, setConversation] = useState([]);
    const email1 = localStorage.getItem('activeUserEmail');
    const [user, setUser] = useState(null);
    const [currentChat, setCurrentChat] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const socket = useRef(io('ws://localhost:8900'));

    useEffect(() => {
        socket.current.emit('addUser', localStorage.getItem('id'));
        socket.current.on('getUsers', users => {
            console.log(users)
        })

    }, [user]);

    useEffect(() => {
        const getConversations = async () => {
            try {
                const res_user = await authService.get_user_info_by_email(email1);
                console.log(res_user);
                setUser(res_user.data.user_info);
                console.log(user);
                console.log('start to get convo');
                const res = await authService.get_convo(localStorage.getItem('id'));
                console.log(res)
                setConversation(res.data);
            } catch (err) {
                console.log(err)
            }
        };
        getConversations()
    }, [localStorage.getItem('id')]);

    useEffect(() => {
        const getMessages = async () => {
            try {
                const res = await authService.get_message(currentChat?._id);
                setMessages(res.data);
            } catch (err) {
                console.log(err)
            }
        };
        getMessages();
    }, [currentChat]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const message = {
            sender: localStorage.getItem('id'),
            text: newMessage,
            conversationId: currentChat?._id
        };

        const receiverId = currentChat.members.find(
            (member) => member !== user._id
        );

        socket.current.emit('sendMessage', {
            senderId: user._id,
            receiverId,
            text: newMessage,
        });

        try {
            const res = await authService.new_message(messages);
            setMessages([...messages, res.data]);
            setNewMessage('')
        } catch (err) {
            console.log(err);
        }
    };

    



    // useEffect(() => { 
    //     scrollRef.current?.scrollIntoView({behavior: 'smooth'});
    // }, [messages]);

    return (
        <div className={style.messenger}>
            <div className={style.chatMenu}>
                <div className={style.chetMenuWrapper}>
                    <input placeholder="Search for friends" className={style.chatMenuInput} />
                    {conversation.map(c => (
                        <div onClick={() => setCurrentChat(c)}>
                            <Conversation conversation={c} currentUser={user} key={user._id} />
                        </div>
                    ))}
                </div>
            </div>
<<<<<<< HEAD
            <div className="chatBox">
                <div className="chatBoxWrapper">
                    {!currentChat
                        ? (
                            <><div className="chatBoxTop">
                                {messages.map((m) => (
                                    //<div ref={scrollRef}>
                                    <Message message={m} own={m.sender === localStorage.getItem('id')} />
                                    //</div>
                                ))}

                            </div><div className="chatBoxBottom">
                                    <textarea className='chatMessageInput'
                                        placeholder='write something ...'
                                        onChange={(e) => setNewMessage(e.target.value)}
                                        value={newMessage}
                                    ></textarea>
                                    <button className='chatSumbitButton' onClick={handleSubmit}>Send</button>
                                </div></>
                        )
                        : (
                            <span className='noConversationtext'>Open conversation to start a chat.</span>
                        )}
                </div>
            </div>
            <div className="chatOnline"></div>
            <div className="chatOnlineWrapper">
                <ChatOnline />
=======
            <div className={style.chatBox}>
                <div
                className={style.chatBoxWrapper}>
                    { !currentChat
? (
                    <><div className={style.chatBoxTop}>
                        {messages.map((m) => (
                            <Message message={m} own={m.sender === localStorage.getItem('id')} />
                        ))}

                        </div><div className={style.chatBoxBottom}>
                                <textarea className={style.chatMessageInput}
                                placeholder='write something ...'
                                onChange={(e) => setNewMessage(e.target.value) }
                                value={newMessage}
                                ></textarea>
                                <button className={style.chatSumbitButton} onClick={handleSubmit}>Send</button>
                            </div></>
                )
: (
                    <span className={style.noConversationtext}>Open conversation to start a chat.</span>
                    )}
                </div>
            </div>
            <div className={style.chatOnline}></div>
            <div className={style.chatOnlineWrapper}>
                <ChatOnline/>
>>>>>>> 8f09bbe1ce6512c9197c78bc1388d9214569b796
            </div>
        </div>
    )
}
export default Messenger;
