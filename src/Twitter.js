import React from 'react';
import "./sass/Twitter.scss";

import { Hashtag } from 'react-twitter-widgets'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';



const Twitter = (props) => {
  return (
    <section className="twitter_container">
      <TwitterTimelineEmbed
       sourceType="url"
       url=""
       screenName="DBinnentuin"
       options={{height: 800}}
       theme="dark"
      />
      <Hashtag hashtag="plant" className="twitter_container__hashtag"/>
    </section>
  );
};

export default Twitter;
