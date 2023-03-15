import React, { useEffect, useState, useLocation as useLoc, useContext } from 'react';
import { useStore } from 'react-redux';
import { Link, useParams, useLocation } from 'react-router-dom';
import { authContext } from '../App';
import AnswerQuestion from '../Components/answer/answer';

function Answer(props) {
    const questionId = useParams();
    const [user, _] = useContext(authContext);
    const location = useLocation();

    return (
        <div>
            { user ?
                <AnswerQuestion questionHeading={location.state.heading} questionId={questionId} /> :
                <> <br /> <br /> <br /> <br /> <p> <Link to={{ pathname: "/login", state: { pathname: location.pathname } }} > Log In</Link> to answer this question </p> </>
            }
        </div>
    );

}

export default Answer;