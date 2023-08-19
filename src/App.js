import { ChatEngine } from "react-chat-engine";
import "./App.css"
import LoginForm from "./component/LoginForm";
import ChatFeed from "./component/ChatFeed";

const projectID="eebd5d1c-3605-46f7-bc7e-da2bf1015a2e";


const App = () => {
    if(!localStorage.getItem("userName")) return <LoginForm/>
    
    return (
        <ChatEngine
            height="100vh"
            projectID={projectID}
            userName={localStorage.getItem('userName')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps}/>}
            onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        />
    );
}
export default App;