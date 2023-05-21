import React from 'react'
import "./Widgets.css"
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed, TwitterMomentShare } from "react-twitter-embed";
import { SearchOutlined } from '@material-ui/icons';

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchOutlined className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text"/>
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        {/* <TwitterMomentShare momentId={'650667182356082688'} /> */}
        {/* <TwitterTweetEmbed tweetId={"1317422087649161219"} /> */}
        <TwitterTimelineEmbed sourceType="profile" screenName="Twitter" options={{height: 500}} />
        <TwitterShareButton url={'https://facebook.com/saurabhnemade'} options={{ text: '#reactjs is awesome', via: 'Twitter' }} />
        {/* <TwitterTimelineEmbed sourceType="profile" screenName="saurabhnemade" options={{height: 400}} />
        <TwitterShareButton url={'https://facebook.com/saurabhnemade'} options={{ text: '#reactjs is awesome', via: 'saurabhnemade' }} /> */}
      </div>
    </div>
  )
}

export default Widgets
