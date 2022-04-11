import config from "./config";
import MessageParser from "./MessageParser.js";
import ActionProvider from "./ActionProvider.js";
import Chatbot from "react-chatbot-kit";

const ChatbotUI = () => {
    return (
        <div>
            <Chatbot
                config={config}
                messageParser={MessageParser}
                actionProvider={ActionProvider}
            />
        </div>
    );
};

export default ChatbotUI;
