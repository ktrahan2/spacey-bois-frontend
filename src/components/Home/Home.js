import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import '../../Home.css'

const Home = () => {

    const dispatch = useDispatch()
    const history = useHistory()
    const [ isSignup, setIsSignUp ] = useState(false)
    const [ userFormData, setuserFormData ] = useState({
        username: "",
        email: "",
        password: "",
        passwordVerify: ""
    })
    //currently moves forward with wrong password, change history push
    const signin = ( event ) => {
        event.preventDefault()
        if ( isSignup && userFormData.password !== userFormData.passwordVerify ) {
            console.log("make error message that passwords dont match")
        } else if ( isSignup && userFormData.password === userFormData.passwordVerify ) {
            createNewUser()
        } else {
            userSignIn()
        }
    }

    const createNewUser = () => {
        fetch('http://127.0.0.1:9000/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ user: {
                username: userFormData.username,
                password: userFormData.password,
                email: userFormData.email
            }})
        })
        .then(response => response.json())
        .then(result => saveUserInfo(result))
        .catch(error => console.error(error))
    }

    const userSignIn = () => {
        fetch('http://127.0.0.1:9000/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: userFormData.username,
                password: userFormData.password
            })
        })
        .then(response => response.json())
        .then(result => saveUserInfo(result))
        .catch(error => console.error(error))
    }

    const saveUserInfo = ( result ) => {
        localStorage.setItem('token', result.token)
        localStorage.setItem('userId', result.user)
        history.push("/character-selection")
    }

    return (
        <div id="signin-page">
            <div id="home-page-header">
                <h1 id="game-title">Spacey Bois</h1>
                <p id="game-description">Come on in and enjoy the ride! Moar description laters and better colors</p>
            </div>
            <div id="home-page-body">
                <div id="user-form">
                    <input
                        className="user-form-input"
                        id="username"
                        onChange={ ( event ) => setuserFormData({...userFormData, username: event.target.value}) }
                        name="username"
                        placeholder="Enter Username"
                        autoComplete="off"
                    >
                    </input>
                    <input
                        className="user-form-input"
                        id="password"
                        type="password"
                        onChange={ ( event ) => setuserFormData({...userFormData, password: event.target.value}) }
                        name="password"
                        placeholder="Enter Password"
                        autoComplete="off"
                    >
                    </input>   
                { isSignup ? 
                    <>
                        <input
                            className="user-form-input"
                            id="password-checker"
                            type="password"
                            onChange={ ( event ) => setuserFormData({...userFormData, passwordVerify: event.target.value}) }
                            name="password-checker"
                            placeholder="Reenter Password"
                            autoComplete="off"
                        ></input>
                        <input
                            className="user-form-input"
                            id="email"
                            onChange={ ( event ) => setuserFormData({...userFormData, email: event.target.value}) }
                            name="email"
                            placeholder="Enter Email"
                            autoComplete="off"
                        >
                        </input>
                        <p>Already a member? <a onClick={ () => setIsSignUp(false) }>Sign In</a></p>
                    </>
                    : 
                    <p>Not a member yet? <a onClick={ () => setIsSignUp(true) }>Sign Up</a></p>
                }
                    <button 
                        className="button"
                        onClick={ (event) => signin(event)}
                    >
                        { isSignup ? "Sign Up" : "Sign In"}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home
