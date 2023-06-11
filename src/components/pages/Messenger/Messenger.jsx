import Conversation from "../Conversation/Conversation";
import "./styles/Messenger.module.css";


export default function Messenger() {
    return (
        <div className="messenger">
            <div className="chatMenu">
                <div className="chetMenuWrapper">
                    <input placeholder="Search for friends" className="chatMenuInput" >
                    <Conversation />
                    </input>
                </div>
            </div>
            <div className="chatBox">
                <div className="chatBoxWrapper">
                    <div className="chatBoxTop"></div>
                    <div className="chatBoxBottom"></div>
                </div>
            </div>
            <div className="chatOnline"></div>
        </div>
    )
}