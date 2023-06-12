import './Conversation.css'
import React from 'react';

export default function Conversation ({conversation, currentUser}) {
    const [user,setUser] = useState(null)

    useEffect(() => {
        const friendId = conversation.members.find((m) => m !== currentUser._id);
        const PF = process.env.REACT_APP_PUBLIC_FOLDER;

        const getUser = async () => {
            try {
                const res = await axios("/user?userId=" + friendId);
                setUser(res.data)
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
            <span className="conversationName">{user.username}</span>
        </div>
    )
}
