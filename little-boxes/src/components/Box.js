import React from 'react';

const Box = props => {
  const { propsBoxClass, propsParagraph, header } = props;
  let boxClass = `box ${propsBoxClass}`

  let paragraph
  if (propsParagraph) {
    paragraph = <p>{props.paragraph}</p>
  }

  return (
    <div className={boxClass}>
      <h1>{header}</h1>
      {paragraph}
    </div>
  )
}

export default Box;
