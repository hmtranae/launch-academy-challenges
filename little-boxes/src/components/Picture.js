import React from 'react';

const Picture = props => {
  const { url } = props;
  return (
    <div className='box picture'>
      <h1>Look at This Picture</h1>
      <img alt='Clever EEs' src={url} />
    </div>
  )
}

export default Picture;
