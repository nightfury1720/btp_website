export default (message = { status: 0 }, action) => {
    switch (action.type) {
        case "Ask":
            return { ...message, askstatus: action.payload };
        case "Answer":
            return { ...message, answerstatus: action.payload };
        case "Reset":
            return { askstatus: 0, answerstatus: 0 };
        default:
            return message;
    }
}