import React from 'react';
import './styles/webCard.css';

const WebCard = (props) => {

  let { title, url, intro } = props;

  // truncate too long url
  let urlExpression = "";
  if (title.length > 100) title = title.substring(0, 100);
  if (url.length > 80) {
    urlExpression = url.substring(0, 80) + "...";
  }

  return (
    <div class="search-result">
      <a class="result-title" href={url}>{title}</a>
      <a href={url}>{urlExpression}</a>
      <p>{intro}</p>
    </div>
  );
}

export default WebCard;