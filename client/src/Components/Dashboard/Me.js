import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import './Me.css';
import { authContext } from '../../App';
import { updateUser } from './../../actions/index';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(12),
        height: theme.spacing(12),
    },
}));

function Me() {
    const [user, _] = useContext(authContext);

    const [editing, setmode] = useState(false);

    const [info, setinfo] = useState({
        name: user?.name,
        description: user?.description
    });
    const classes = useStyles();
    const dispatch = useDispatch();

    if (!user) {
        return <> <br /> <br /> <br /> <br /> <p> <Link to={{ pathname: "/login", state: { pathname: "/me" } }}> Log In</Link> to view your profile. </p> </>;
    }
    let username = user?.name;
    let url = user?.photo;

    function handleSubmit(e) {
        // console.log(info.name);
        // console.log(info.description);
        const details = { userId: user._id, name: info.name, description: info.description };
        dispatch(updateUser(details));
    }

    return <div className="Me">
        {editing ? (
            <form onSubmit={handleSubmit}>
                <div className="updateinfo">
                    <div className="form-group row">
                        <label for="Name" className="col-sm-2 col-form-label">
                            Name
                        </label>
                        <div class="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                id="Name"
                                required
                                value={info.name}
                                onChange={(e) => setinfo({ ...info, name: e.target.value })}
                            />
                        </div>

                        <label for="staticEmail" className="col-sm-2 col-form-label">
                            Email
                        </label>
                        <div class="col-sm-10">
                            <input
                                type="text"
                                contentEditable={false}
                                className="form-control-plaintext staticInput"
                                id="staticEmail"
                                value={user.email}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="editDesc">Description</label>
                        <textarea
                            className="form-control"
                            placeholder={!user.description && "Describe yourself"}
                            rows="4"
                            value={info.description}
                            onChange={(e) => setinfo({ ...info, description: e.target.value })}
                        ></textarea>
                    </div>
                </div>
                <button type="submit" onClick={handleSubmit} className="btn btn-danger askFormButton">
                    Update
                </button>
                <button type="button" onClick={() => { setmode(false) }} className="btn btn-primary clearButton">
                    Cancel
                </button>
            </form>
        ) : (
            <>
                <button className="Edit-button" onClick={() => setmode(true)}>
                    <FontAwesomeIcon icon={faEdit} className="Edit" size="2x" />
                </button>
                <h1>Name: {username}</h1>
                <h2>Email: {user.email}</h2>
                <Avatar
                    rounded
                    src={url}
                    className={classes.large}
                    style={{
                        marginLeft: "auto",
                        marginRight: "auto",
                        marginBottom: "20px"
                    }}
                />
                <div className="description">
                    <h4 className="description_heading">Description: </h4>
                    <p className="description_text">
                        {user.description ? user.description : "Add description about yourself"}
                    </p>
                </div>
                {/* <button className="btn btn-danger" >Your Questions</button>
                <button className="btn btn-danger">Your Answers</button> */}
            </>
        )}
    </div>
}

export default Me;