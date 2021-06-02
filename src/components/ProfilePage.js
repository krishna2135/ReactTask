import React,{useState,useEffect} from 'react'
import {Table } from 'react-bootstrap'
import { Link } from "react-router-dom";
import axios from "axios";

const ProfilePage = () => {
    const [userData,setUserData]=useState('');

    var currentUser = localStorage.getItem('userId');

    useEffect(() => {
        axios.get(`http://localhost:8080/users/${currentUser}`)
  .then((response) => {
    // console.log(response.data);
    setUserData(response.data)
    
  });
      },[]);

    
    return (
        <Table striped bordered hover style={{width:"70%"}} className="mt-5 ml-5">
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Study</th>
                    <th>Actions</th>
                </tr>

            </thead>
            <tbody>
                {userData ? 
                    <tr key={userData._id}>
                        <td>{userData.firstName}</td>
                        <td>{userData.lastName}</td>
                        <td>{userData.phone}</td>
                        <td>{userData.email}</td>
                        <td>{userData.study}</td>
                        <td ><Link
                    className="btn btn-outline-primary mr-2"
                    to={`/edit`}
                  >
                    Edit
                  </Link></td>
                    </tr>
                 :
                    <tr>
                        <td colSpan="4" className="text-center">No ticket to show
                            </td>
                    </tr>
                };
                </tbody>

        </Table>
    )
}

export default ProfilePage
