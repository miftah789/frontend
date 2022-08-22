import React, {useState} from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

const Register = () => {
    const[username,setUsername] = useState('');
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    const[nama,setNama] = useState('');
    const[confPassword,setConfPassword] = useState('');
    const[msg, setMsg] = useState('');
    const navigate = useNavigate();

    const Register = async(e) => {
        e.preventDefault();
        try{
            await axios.post('http://localhost:5000/register', {
                username: username,
                email: email,
                nama: nama,
                password: password,
                confPassword: confPassword

            });
            navigate("/");
        }catch(error){
            if(error.response){
                setMsg(error.response.data.msg);
                // console.log(error.response.data);
            }
        }
    }

    return(
        <section className="hero has-background-grey-light is-fullheight is-fullwidth">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>
          <div className="hero-body">
            <div className="container">
                <div className="columns is-centered">
                    <div className="column is-4-desktop">
                        <form onSubmit={ Register } className="box">
                        <p className="has-text-centered" style={{color:"red"}}> {msg} </p>
                            <div className="field mt-5">
                                <label>Name</label>
                                <div className="control">
                                    <input type="text" placeholder="Name" className="input" value={nama} onChange={(e) => setNama(e.target.value)}/>
                                </div>
                                <label>Username</label>
                                <div className="control has-icons-left">
                                    <input type="text" placeholder="Username" className="input" value={username} onChange={(e) => setUsername(e.target.value)}/>
                                    <span class="icon is-small is-left">
                                        <i class="fa fa-user"></i>
                                    </span>
                                </div>
                                <label>Email</label>
                                <div className="control has-icons-left">
                                     <input type="text" placeholder="Email" className="input" value={email} onChange={(e) => setEmail(e.target.value)}/>
                                     <span class="icon is-small is-left">
                                        <i class="fa fa-envelope"></i>
                                    </span>
                                 </div>
                                 <label>Password</label>
                                 <div className="control has-icons-left">
                                     <input type="password" placeholder="*****" className="input" value={password} onChange={(e) => setPassword(e.target.value)}/>
                                     <span class="icon is-small is-left">
                                        <i class="fa fa-lock"></i>
                                    </span>
                                 </div>
                                 <label>Confirm Password</label>
                                 <div className="control has-icons-left">
                                     <input type="password" placeholder="*****" className="input" value={confPassword} onChange={(e) => setConfPassword(e.target.value)}/>
                                     <span class="icon is-small is-left">
                                        <i class="fa fa-lock"></i>
                                    </span>
                                 </div>
                                 <div className="field mt-5">
                                     <button className="button is-success is-fullwidth">Register</button>
                                 </div>
                                 <div className="field mt-5">
                                     <Link to="/" className="button is-warning is-fullwidth">
                                         Cancel
                                     </Link>
                                 </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
          </div>
        </section>
    )
}
//miftahul jannah
export default Register