import React from 'react';

const Box = props => {
  const { propsBoxClass, propsParagraph, header, url, imgAlt, listItems } = props;
  let boxClass = `box ${propsBoxClass}`

  let paragraph
  if (propsParagraph) {
    paragraph = <p>{propsParagraph}</p>
  }

  let image
  if (url) {
    image = <img alt={imgAlt} src={url} />
  }

  let list
  if (listItems) {
    let mappedList = listItems.map(item => {
      return <li>{item}</li>
    })
    list = <ul>{mappedList}</ul>
  }

  return (
    <div className={boxClass}>
      <h1>{header}</h1>
      {image}
      {paragraph}
      {list}
    </div>
  )
}

export default Box;
