import React from 'react';
import Tweet from '../components/Tweet';

const formatTweetContent = (tweetContent, tweetImage) => {
  return tweetContent.replace(tweetImage, '')
}

const TwitterFeed = (props) => {
  const { data } = props;
  const tweets = data.map(tweet => {
    return (
      <Tweet
        tweet={tweet}
        liked={tweet.liked}
        retweeted={tweet.retweeted}
        date={tweet.timestamp_ms}
        retweetCount={tweet.retweet_count}
        favoriteCount={tweet.favorite_count}
        key={parseInt(tweet.id_str)}
        profilePic={tweet.user.profile_image_url}
        name={tweet.user.name}
        username={tweet.user.screen_name}
        tweetContent={(tweet.entities.media === undefined) ? tweet.text : formatTweetContent(tweet.text, tweet.entities.media[0].display_url)}
        tweetImage={(tweet.entities.media === undefined) ? undefined : tweet.entities.media[0].media_url}
      />
    )
  })

  return (
    <div>
      {tweets}
    </div>
  )
};

export default TwitterFeed;
