import React, { useState, useEffect, useLocation, useContext } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { Link } from 'react-router-dom';
import { askQuestion } from '../../actions/index.js';
import { authContext } from '../../App.js';
import './ask.css';


const AskForm = () => {
    const [user, _] = useContext(authContext);
    console.log(user);
    const [data, changeData] = useState({ heading: '', description: '', tags: '', postedBy: user });
    const dispatch = useDispatch();


    function clean() {
        changeData({ heading: '', description: '', tags: '', postedBy: user });
    }
    function clear() {
        setTimeout(() => dispatch({ type: 'Reset' }), 5000);
        clean();
    }
    function handleSubmit(e) {
        e.preventDefault();
        const t = { ...data, tags: data.tags.split(' ') };
        dispatch(askQuestion(t));
        clear();
    }

    const status = useSelector((state) => state.message.askstatus);

    if (!user) {
        return <> <br /> <br /> <br /> <br /> <p> <Link to={{ pathname: "/login", state: { pathname: "/ask" } }}> Log In</Link> to ask a question </p> </>;
    }

    return <div className="Askform shadow-lg">
        <form onSubmit={handleSubmit} >
            <div className="form-group" >
                <label>Question</label>
                <textarea value={data.heading} className="form-control" rows="5" onChange={(e) => { changeData({ ...data, heading: e.target.value }); }} placeholder="Enter your question here..." required></textarea>
            </div>
            <div className="form-group">
                <label>Description</label>
                <textarea value={data.description} className="form-control" rows="5" onChange={(e) => { changeData({ ...data, description: e.target.value }); }} placeholder="Describe your question" ></textarea>
            </div>
            <div className="form-group">
                <label>Tags</label>
                <textarea value={data.tags} className="form-control" rows="2" onChange={(e) => { changeData({ ...data, tags: e.target.value }); }} placeholder="Add space-separated tags to your question" ></textarea>
            </div>
            <button type="submit" className="btn btn-danger askFormButton" >Ask</button>
            <button type="button" className="btn btn-primary clearButton" onClick={clear} >Clear</button>

            <div className="relative w-full mb-3 mt-8" style={{ display: `${status === 2 ? 'block' : 'none'}` }}>
                <div class="alert alert-danger" role="alert">
                    Some error was encountered!
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
            <div className="relative w-full mb-3 mt-8" style={{ display: `${status === 1 ? 'block' : 'none'}` }}>
                <div class="alert alert-success" role="alert">
                    Your message has been sent successfully!
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
        </form>
    </div>
}

export default AskForm;