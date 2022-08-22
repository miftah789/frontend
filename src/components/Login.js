import React, {useState} from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
//miftahul jannah
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
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>
          <div className="hero-body">
            <div className="container">
                <div className="columns is-centered">
                    <div className="column is-4-desktop" style={{opacity: 0.9}}>
                        <form onSubmit={Auth} className="box">
                        {/* <figure class="image is-128x128 has-text-centered">
                            <img class="is-rounded is-text-centered" src="https://versions.bulma.io/0.7.4/images/placeholders/128x128.png"/>
                        </figure> */}
                            <p className="has-text-centered" style={{color:"red"}}> {msg} </p>
                            <div className="field">
                                <label>Username</label>
                                <div className="control has-icons-left">
                                    <input type="text" placeholder="Username" className="input" value={username} onChange={onChangeUsername}/>
                                    <span class="icon is-small is-left">
                                        <i class="fa fa-user"></i>
                                    </span>
                                </div>
                            </div>
                            <div className="field">
                                <label>Password</label>
                                <div className="control has-icons-left">
                                    <input type="password" placeholder="password" className="input" value={password} onChange={onChangePassword}/>
                                    <span class="icon is-small is-left">
                                        <i class="fa fa-lock"></i>
                                    </span>
                                </div>
                            </div>
                            <div className="level options">
                                <div className="checkbox level-left">
                                    <p class="is-size-7"><label><input type="checkbox" class="is-check-input" checked/> Remember me</label></p>
                                </div>
                                <p class="is-size-7"><Link to="/register" >Forgot Password?</Link></p>
                            </div>
                            <div className="field">
                                <button className="button is-black is-fullwidth">Login</button>
                            </div>
                            <p class="is-size-7"> Don't have an account? <Link to="/register" >Register</Link></p>
                            
                        </form>
                    </div>
                </div>
            </div>
          </div>
        </section>
    )
}


export default Login