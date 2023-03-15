export default (posts = [], action) => {
    switch (action.type) {
        case "Ask":
            return posts;
        case "FETCH_ALL":
            return action.payload;
        default:
            return posts;
    }
}
