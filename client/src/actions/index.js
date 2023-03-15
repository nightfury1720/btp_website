import * as api from '../api/index.js';

export const askQuestion = (question) => async (dispatch) => {
    try {
        const data = await api.askquestion(question);
        await dispatch({ type: "Ask", payload: data.data });
    } catch (error) {
        console.log(error);
        await dispatch({ type: "Ask", payload: 2 });
    }
}

export const login = (user) => async (dispatch) => {
    let userDetail = user?.profileObj;
    const token = user?.tokenId;
    try {
        userDetail = await api.login(userDetail);
        await dispatch({ type: 'AUTH', data: userDetail.data });
    } catch (error) {
        console.log(error);
    }
}

export const getPosts = () => async (dispatch) => {
    try {
        const posts = await api.getAllPosts();
        // console.log(posts);
        dispatch({ type: 'FETCH_ALL', payload: posts.data });
    } catch (error) {
        console.log(error);
    }
}

export const answer = (data) => async (dispatch) => {
    try {
        const res = await api.answer(data);
        // console.log(data);
        await dispatch({ type: "Answer", payload: res.data });
    } catch (error) {
        console.log(error);
        await dispatch({ type: "Answer", payload: 2 });
    }
}

export const updateUser = (detail) => async (dispatch) => {
    try {
        const newUserDetails = await api.updateUserDetails(detail);
        await dispatch({ type: 'AUTH', data: newUserDetails.data });
    } catch (error) {
        console.log(error);
    }
}