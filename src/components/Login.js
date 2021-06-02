import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link, NavLink,useHistory } from "react-router-dom";

import {
	Container,
	Row,
	Col,
	Form,
	Button,
	
} from "react-bootstrap";



 const LoginForm = () => {
	
	
    const history = useHistory();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
    const [error,setError] =useState('');
    const [loginresponse,setLoginresponse]=useState('');
    

	const handleOnChange = e => {
		const { name, value } = e.target;
        

		switch (name) {
			case "email":
				setEmail(value);
				break;

			case "password":
				setPassword(value);
				break;

			default:
				break;
		}
	};

	const handleOnSubmit = async e => {
		e.preventDefault();

		if (!email || !password) {
            setError('Enter email and password')
			
		}
        else{
        axios.post('http://localhost:8080/login', {
            email: email,
            password: password
            
          })
          .then(function (response) {
            setLoginresponse(response)
            
            if(response.data.status){
                localStorage.setItem('userId', response.data.userId);
                history.push("/profilepage"); 
            }
            else{
                setError('Enter email valid and password')
            }
          })
        }
		

		
	};

	return (
        
		<Container >
			<Row className="mt-5 ">
				<Col>
					<h1 className="text-info text-center">User Login</h1>
					<hr />
				<h3 style={{color:"red"}}>{error}</h3>
					<Form className="formcontainer" autoComplete="off" onSubmit={handleOnSubmit}>
						<Form.Group>
							<Form.Label>Email Address</Form.Label>
							<Form.Control
								type="email"
								name="email"
								value={email}
								onChange={handleOnChange}
								placeholder="Enter Email"
								// required
							/>
						</Form.Group>
						<Form.Group>
							<Form.Label>Password</Form.Label>
							<Form.Control
								type="password"
								name="password"
								onChange={handleOnChange}
								value={password}
								placeholder="password"
								// required
							/>
						</Form.Group>

						<Button className="mt-2" type="submit">Login</Button>
						
					</Form>
					
				</Col>
			</Row>

			
			
		</Container>
    
	);
};

export default LoginForm;