import { createChatBotMessage } from "react-chatbot-kit";

const getAllIntents = async () => {
    let res = await fetch("https://server-testbot.herokuapp.com/bot/intents");
    res = await res.json();
    res = res.map((intent) => createChatBotMessage(intent));
    return res;
};

const api = {
    getAllIntents,
};

export default api;
