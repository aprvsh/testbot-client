import api from "../api/api";

class ActionProvider {
    constructor(createChatbotMessage, setStateFunc, createClientMessage) {
        this.createChatbotMessage = createChatbotMessage;
        this.setState = setStateFunc;
        this.createClientMessage = createClientMessage;
    }

    setNewMessage(msg) {
        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, msg],
        }));
    }

    handleShow() {
        api.getAllIntents().then((res) =>
            res.forEach((intent) => this.setNewMessage(intent))
        );
    }
}

export default ActionProvider;
