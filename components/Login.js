import React from 'react'
import styles from '../styles/Login.module.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../reducers/user';
import Link from 'next/link';

function Login() {

    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.value);

    const [displayModalSignup, setDisplayModalSignup] = useState({display : "none"});
    const [displayModalSignin, setDisplayModalSignin] = useState({display : "none"});
    const [background, setBackground] = useState({})

    const [firstName, setFirstName] = useState("");
    console.log(firstName);
    const [signUpUserName, setSignUpUserName] = useState("");
    const [signUpPassword, setSignUpPassword] = useState("");
    const [signInUserName, setSignInUserName] = useState("");
    const [signInPassword, setSignInPassword] = useState("");

console.log("USER =>", user);

    const handleSignUp = () => {
        fetch('http://localhost:3000/users/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({firstname: firstName , username: signUpUserName, password: signUpPassword }),
          }).then(response => response.json())
            .then(data => {
              if (data.result) {
                dispatch(login({ username: signUpUserName, token: data.token }));
                setSignUpUserName('');
                setSignUpPassword('');
                setFirstName('');
                console.log("JE SUIS LE TOKEN =>", data.token);
                window.location.href = "http://localhost:3001/accueil";
              }
            });
    }

    const handleSignIn = () => {
        fetch('http://localhost:3000/users/signin', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username: signInUserName, password: signInPassword }),
        }).then(response => response.json())
          .then(data => {
            console.log("RESULT", data.result);
            console.log("ERROR ?", data.error);
            if (data.result) {
              dispatch(login({ username: signInUserName, token: data.token }));
              setSignInUserName('');
              setSignInPassword('');
              window.location.href = "http://localhost:3001/accueil";
            }
          });
      };

    const handleSignupClick = () => {
        setDisplayModalSignup({display : "flex"})
        setBackground({opacity: 0.4});
        console.log("CLICK");
    }

    const handleSigninClick = () => {
        setDisplayModalSignin({display : "flex"})
        console.log("CLICK");
        setBackground({opacity: 0.4});
    }

    const handleCloseClickSignup = () => {
        setDisplayModalSignup({display : "none"})
        setBackground({});
    }

    const handleCloseClickSignin = () => {
        setDisplayModalSignin({display : "none"})
        setBackground({});
    }
console.log("JE ME RAFRAICHIT");
    return (
        <>
        
            <div style={background} className={styles.container}>
                <div className={styles.left}>
                    <img src="/img/imgLogin.png" alt="Logo tweeter retourné" className={styles.tweet} />
                </div>
                <div className={styles.containerRight}>
                    <div className={styles.right}>
                        <img src="img/logoInverse.png" alt="Logo tweeter inversé" className={styles.tweetInver} />
                    </div>
                    <div className={styles.title}>
                        <h1>See what's <br /> happening</h1>
                        <p>Join Hackatweet today.</p>
                    </div>
                    <div className={styles.containerButton}>
                        <button className={styles.button1} onClick={() => handleSignupClick()} >Sign up</button>
                        <p>Already have an account?</p>
                        <button className={styles.button} onClick={() => handleSigninClick()}>Sign in</button>
                    </div>
                </div>
            </div>

                <div style={displayModalSignup} className={styles.signup}>
                    <div className={styles.close} onClick={() => handleCloseClickSignup()}>x</div>
                    <img src="img/logoInverse.png" alt="Logo tweeter inversé" className={styles.tweetInv} />
                    <h2>Create your Hackatweet account</h2>
                    <input type="text" placeholder='Firstname' onChange={(e) => setFirstName(e.target.value)} value={firstName} className={styles.inputSignup} />
                    <input type="text" placeholder='Username'  onChange={(e) => setSignUpUserName(e.target.value)} value={signUpUserName} className={styles.inputSignup} />
                    <input type="password" placeholder='Password'  onChange={(e) => setSignUpPassword(e.target.value)} value={signUpPassword} className={styles.inputSignup} />
                    <button className={styles.buttonSignup} onClick={() => handleSignUp()} >Sign up</button>
                </div>

                <div style={displayModalSignin} className={styles.signup}>
                    <span className={styles.close}  onClick={() => handleCloseClickSignin()}>x</span>
                    <img src="img/logoInverse.png" alt="Logo tweeter inversé" className={styles.tweetInv} />
                    <h2>Connect to Hackatweet</h2>
                    <input type="text" placeholder='Username' onChange={(e) => setSignInUserName(e.target.value)} value={signInUserName} className={styles.inputSignup} />
                    <input type="password" placeholder='Password' onChange={(e) => setSignInPassword(e.target.value)} value={signInPassword} className={styles.inputSignup} />
                    <button className={styles.buttonSignup} onClick={() => handleSignIn()} >Sign in</button>
                </div>
        </>
    )
}

export default Login