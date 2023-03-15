import React, { useContext, useEffect, useState } from 'react';
import './navbar.css';
import { Link, useLocation } from 'react-router-dom';
import quoraText from '../../Quora_text.PNG';
import { useDispatch } from 'react-redux';
import { authContext } from '../../App';
function Navbar() {
    const [user, setUser] = useContext(authContext);      // Some Error in this line. 
    const location = useLocation();
    const dispatch = useDispatch();
    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    const Logout = async () => {
        try {
            await dispatch({ type: 'LOGOUT' });
            setUser(null);
        } catch (error) {
            console.log(error);
        }
    }

    function toogleState(e) {
        document.querySelector('.offcanvas-collapse').classList.toggle('open');
    }

    return (
        <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark" >
            <div class="container-fluid">
                <a class="navbar-brand ml-3" href="/">Quora-Clone</a>
                <button class="navbar-toggler p-0 border-0" type="button" onClick={toogleState} id="navbarSideCollapse" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="navbar-collapse ml-auto offcanvas-collapse" id="navbarsExampleDefault">
                    <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
                        <li class="nav-item" onClick={toogleState}>
                            <Link to="/me" class="nav-link" >Dashboard </Link>
                        </li>
                        <li class="nav-item" onClick={toogleState}>
                            <Link to="/" class="nav-link" > Home </Link>
                        </li>
                        <li class="nav-item" onClick={toogleState}>
                            <Link to="/ask" class="nav-link" >Ask</Link>
                        </li>

                        <li className="nav-item" onClick={toogleState}>
                            {user ? <Link className="nav-link" onClick={Logout}> Logout </Link> : <Link className="nav-link" to="/login">  Login  </Link>}
                        </li>
                        <li class="nav-item">
                            <form class="d-flex navbar-nav me-3 ml-3 mb-2">
                                <input class="form-control me-3" type="search" placeholder="Search" aria-label="Search" />
                                <button class="btn btn-outline-success" type="submit" onClick={toogleState}>Search</button>
                            </form>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );
}

export default Navbar;
