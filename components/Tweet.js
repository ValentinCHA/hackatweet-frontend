import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/Tweet.module.css";
import stylesHome from "../styles/Home.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function Tweet(props) {
  const user = useSelector((state) => state.user.value);

  return (
    <>
      <div className={styles.tweetContainer}>
        <div className={styles.headerTweet}>
        <img
          src="img/oeuf.jpg"
          alt="Logo tweeter inversé"
          className={stylesHome.oeuf}
        />
        <p className={styles.name}>{user.username} <span className={styles.afterName}>@{user.username} -  5 minutes ago</span></p>
        </div>
        <p className={styles.tweetDesc}>EXEMPLE DE TWEET !!</p>
        <div className={styles.likeDelete}>
        <FontAwesomeIcon icon={faHeart} className={styles.like} />
        <p className={styles.counter}>0</p>
        </div>
      </div>
    </>
  );
}

export default Tweet;
