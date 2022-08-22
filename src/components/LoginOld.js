import React, {useState} from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

const Login = () => {
    const[username,setUsername] = useState('');
    const[password,setPassword] = useState('');
    const[msg, setMsg] = useState('');
    const navigate = useNavigate();

    const onChangeUsername = (e) => {
        const value = e.target.value
        setUsername(value)
    }

    const onChangePassword = (e) => {
        const value = e.target.value
        setPassword(value)
    }

    const Auth = async (e) => {
        e.preventDefault();
        try{
            await axios.post('http://localhost:5000/login', {
                username: username,
                password: password

            });
            navigate("/dashboard");
        }catch(error){
            if(error.response){
                setMsg(error.response.data.msg);
                console.log(error.response.data);
            }
        }
    }

    return(
        <section className="hero has-background-grey-light is-fullheight is-fullwidth">
          <div className="container">
            <div className="hero-body">
                <div style={{marginTop: "200px"}}>
                <div className="colums is-centered">
                    <div className="colum is-4-desktop">
                        <form onSubmit={Auth} className="box">
                        <p className="has-text-centered" style={{color:"red"}}> {msg} </p>
                            <div className="field mt-5">
                                <label>Username</label>
                                <div className="controls">
                                    <input type="text" placeholder="Username" className="input" value={username} onChange={onChangeUsername}/>
                                </div>
                            </div>
                            <div className="field mt-5">
                                <label>Password</label>
                                <div className="controls">
                                    <input type="password" placeholder="password" className="input" value={password} onChange={onChangePassword}/>
                                </div>
                            </div>
                            <div className="field mt-5">
                                <button className="button is-success is-fullwidth">Login</button>
                            </div>
                            <Link to="/register" >Register</Link>
                        </form>
                    </div>
                </div>
                </div>
                
            </div>
          </div>
        </section>
    )
}

export default Login