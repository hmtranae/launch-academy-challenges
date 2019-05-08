import React from 'react';

const formatDate = (epochDate) => {
  const date = new Date(parseInt(epochDate));
  const month = date.toLocaleString('en-us', { month: 'long' });
  const day = date.getDate();

  return `${month} ${day}`;
}

const Tweet = (props) => {
  let { profilePic, name, username, tweetContent, tweetImage, retweetCount, favoriteCount, date, liked, retweeted } = props;

  const onClickReply = (event) => {
    const classList = [...event.target.classList];
    if (classList.includes('fa-reply')) {
      console.log('reply')
    } else if (classList.includes('fa-retweet')) {
      event.target.classList.toggle('icon-retweet')
      console.log('retweet')
    } else if (classList.includes('fa-heart')) {
      event.target.classList.toggle('icon-heart')
      console.log('like')
    } else {
      console.log('more')
    }
  }

  return (
    <div className="grid-container tweets">
      <div className="grid-x grid-margin-x">

        <div className='cell small-12'>

          <div className='media-object'>

            <div className="media-object-section">
              <div className='thumbnail'>
                <img src={profilePic} alt="user profile pic" />
              </div>
            </div>

            <div className="media-object-section">
              <h6>{name} <span>@{username} &bull; {formatDate(date)}</span> </h6>
              <p>{tweetContent}</p>
              {tweetImage && (
                <img className='tweet-image' src={tweetImage} alt="tweet" />
              )}
              <span>
                <i onClick={onClickReply} className="fas fa-xs fa-reply" />
                <i onClick={onClickReply} className={`${retweeted ? 'icon-retweet' : null} fas fa-xs fa-retweet icon-margin`}> {retweetCount} </i>
                <i onClick={onClickReply} className={`${liked ? 'icon-heart' : null} fas fa-xs fa-heart icon-margin`}> {favoriteCount} </i>
                <i onClick={onClickReply} className="fas fa-xs fa-ellipsis-h icon-margin" />
              </span>
            </div>

          </div>

        </div>

      </div>
    </div>
  )
};

export default Tweet;
