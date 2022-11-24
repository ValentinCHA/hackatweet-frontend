import React from 'react'
import styles from '../styles/Login.module.css';

function Login() {
    return (
        <>
            <div className={styles.container}>
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
                        <button className={styles.button}>Sign up</button>
                        <p>Already have an account?</p>
                        <button className={styles.button}>Sign in</button>
                    </div>
                </div>
            </div>
            <div className={styles.signup}>
                <span className={styles.close}>x</span>
                <img src="img/logoInverse.png" alt="Logo tweeter inversé" className={styles.tweetInv} />
                <h2>Create your Hackatweet account</h2>
                <input type="text" placeholder='Firstname' className={styles.inputSignup} />
                <input type="text" placeholder='Username' className={styles.inputSignup} />
                <input type="text" placeholder='Password' className={styles.inputSignup} />
                <button className={styles.buttonSignup}>Sign up</button>
            </div>

            <div className={styles.signup}>
                <span className={styles.close}>x</span>
                <img src="img/logoInverse.png" alt="Logo tweeter inversé" className={styles.tweetInv} />
                <h2>Connect to Hackatweet</h2>
                <input type="text" placeholder='Username' className={styles.inputSignup} />
                <input type="text" placeholder='Password' className={styles.inputSignup} />
                <button className={styles.buttonSignup}>Sign in</button>
            </div>
        </>
    )
}

export default Login