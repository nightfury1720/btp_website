import React, { useEffect } from 'react'
import Post from '../Components/post/post.js';
import { getPosts } from './../actions/index.js';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

function Home() {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts);
    const location = useLocation();
    const history = useHistory();

    useEffect(() => {
        dispatch(getPosts());
    }, [location]);

    // console.log(posts);

    return (
        <div>
            {posts.map((post) => {
                {
                    return <Post postedBy={post.question?.postedBy.name} heading={post.question?.heading}
                        key={post.question?._id} id={post.question?._id} history={history} answer={post.answer}
                    />
                }
            })}
        </div>
    );
}

export default Home
