import React from 'react';

const Picture = props => {
  const { header, url, imgAlt } = props;
  return (
    <div className='box picture'>
      <h1>{header}</h1>
      <img alt={imgAlt} src={url} />
    </div>
  )
}

export default Picture;
