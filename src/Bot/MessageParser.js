class MessageParser {
    constructor(actionProvider, state) {
        this.actionProvider = actionProvider;
        this.state = state;
    }

    parse(message) {
        if (message.includes("intent")) {
            this.actionProvider.handleShow();
        }
    }
}

export default MessageParser;
