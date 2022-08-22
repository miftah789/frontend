import React, {useEffect, useState} from "react";
import { useNavigate, Link } from 'react-router-dom';
import axios from "axios";
import jwt_decode from "jwt-decode";

const Dashboard = () => {
    const[users, setUser] = useState([]);

    useEffect(() => {
        getUser();
    }, []);

    const getUser = async () => {
        const response = await axios.get('http://localhost:5000/users');
        setUser(response.data);
    };

    return(
        <div className="hero-body">
            <div className="container is-centered">
                {/* <Link to={`create`} className="button is-success">Logout</Link> */}
                <div className="column is-centered is-full" style={{marginTop: "10px"}}>
                <tabel className="table">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users?.map((user, index) =>{
                            return (
                                <tr key={user.id}>
                                    <td>{index + 1}</td>
                                    <td>{user.nama}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                 </tabel>
                </div>
            </div>
        </div>
      )
}
//miftahul jannah
export default Dashboard;