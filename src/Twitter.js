import React from 'react';
import "./sass/Twitter.scss";

import { Hashtag } from 'react-twitter-widgets'
import { TwitterTimelineEmbed } from 'react-twitter-embed';

//twitter embed with live feed from @DBinnentuin
//under that is a hashtag button with #debinnentuin

const Twitter = (props) => {
  return (
    <section className="Twitter">
      <h2 className="Twitter__title">Je bestelling is geplaatst!</h2>
      <p className="Twitter__text"> Deel hier je reservaring</p>
      <section className="Twitter__twitter_container">
        <TwitterTimelineEmbed
         sourceType="url"
         url=""
         screenName="DBinnentuin"
         options={{height: 800}}
         theme="dark"
        />
        <Hashtag hashtag="debinnentuin" className="twitter_container__hashtag"/>
      </section>
    </section>
  );
};

export default Twitter;
