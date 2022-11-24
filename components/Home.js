import styles from "../styles/Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from '../reducers/user';
import { useState } from 'react';
import Tweet from './Tweet'

function Home() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  const limit = 280
  const [tweetTxt, setTweetTxt] = useState("")
  console.log(user);


  const handleLogOut = () => {
    console.log("CLICK");
    dispatch(logout());
    window.location.href = "http://localhost:3001/";
  }

  return (
    <div>
      <main className={styles.main}>
        <div className={styles.div1}>
          <div>
            <img
              src="img/logoInverse.png"
              alt="Logo tweeter inversé"
              className={styles.logo}
            />
            <div className={styles.footerLeft}>
              <img
                src="img/oeuf.jpg"
                alt="Logo tweeter inversé"
                className={styles.oeuf}
              />
              <div className={styles.names}>
                <p className={styles.nom}>{user.username}</p>
                <p className={styles.tweetName}>@{user.username}</p>
              </div>
            </div>
            <button className={styles.footerBtn} onClick={() => handleLogOut()}>Logout</button>
          </div>
        </div>
        <div className={styles.div2}>
        <p className={styles.homeTxt}>Trends</p>
        </div>
        <div className={styles.div3}> 
          <p className={styles.homeTxt}>Home</p>
          <div className={styles.tweetDiv}>
          <input type="texte" placeholder="What's up?" className={styles.tweetContent} onChange={(e) => setTweetTxt(e.target.value.slice(0, limit))} value={tweetTxt}></input>
          </div>
          <div className={styles.counterContainer}>
          <p className={styles.counter}>{tweetTxt.length}/280</p>
          <button className={styles.tweetBtn}     >Tweet</button>
          </div>
        </div>
        <div className={styles.div4}>
          <Tweet />

        </div>
      </main>
    </div>
  );
}

export default Home;
