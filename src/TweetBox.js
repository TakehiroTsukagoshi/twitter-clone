import React, { useState } from 'react'
import "./TweetBox.css"
import { Avatar, Button } from '@material-ui/core';
import db from "./firebase";

function TweetBox() {

  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      avatar: "",
      displayName: "Takehiro",
      username: "Takehiro",
      verified: true,
      text: tweetMessage,
      image: tweetImage
    });

    setTweetMessage("");
    setTweetImage("");
  }

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar />
          <input onChange={(e) => setTweetMessage(e.target.value)} value={ tweetMessage } placeholder="What's happening" />
        </div>

          <input onChange={(e) => setTweetImage(e.target.value)} value={ tweetImage } className="tweetBox__imageInput" placeholder="Optional: Enter image URL" type="text"/>

        <Button onClick={ sendTweet } type="submit" className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  )
}

export default TweetBox
