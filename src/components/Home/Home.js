import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import '../../Home.css'
import { postFetch } from '../fetchCalls'

const Home = () => {

    const history = useHistory()
    const [ isSignup, setIsSignUp ] = useState(false)
    const [ userFormData, setuserFormData ] = useState({
        username: "",
        email: "",
        password: "",
        passwordVerify: ""
    })

    const signin = ( event ) => {
        event.preventDefault()
        if ( isSignup && userFormData.password !== userFormData.passwordVerify ) {
            //maybe learn how to create custom popup!
            window.alert('Passwords do not match, try again')
        } else if ( isSignup && userFormData.password === userFormData.passwordVerify ) {
            createNewUser()
        } else {
            userSignIn()  
        }
    }

    const createNewUser = () => {
        const body = {user: {
            username: userFormData.username,
            password: userFormData.password,
            email: userFormData.email
        }}
        postFetch("users", body)
        .then(result => {
            
            if ( result.errors ) {
                //create custom pop up
                window.alert(result.errors)
            } else {
                saveUserInfo(result)
            }
        })
        .catch(error => console.error(error))
    }

    const userSignIn = () => {
        const body = {
            username: userFormData.username,
            password: userFormData.password
        }
        postFetch('login', body)
        .then(result => {
            if ( result.errors ) {
                //create custom pop up
                window.alert(result.errors)
            } else {
                saveUserInfo(result)
            }
        })
        .catch(error => console.error(error))
    }

    const saveUserInfo = ( result ) => {
        localStorage.setItem('token', result.token)
        localStorage.setItem('userId', result.userId)
        history.push('character-selection')
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
                        {/* change the anchor tag to just look like blue highlight instead of being an anchor */}
                        <p>Already a member? <p className="fake-anchor" onClick={ () => setIsSignUp(false) }>Sign In</p></p>
                    </>
                    : 
                    <p>Not a member yet? <p className="fake-anchor" onClick={ () => setIsSignUp(true) }>Sign Up</p></p>
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
