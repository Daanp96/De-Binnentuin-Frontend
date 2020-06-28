import React from 'react';

const Opening = (props) => {
  return (
    <article className="OpeningArticle">
      <figure className="OpeningArticle__figure">
        <img className="OpeningArticle__figure__img" src={props.img1Src ? './images/open-sign.png' : "./images/closed-sign.png"} alt="dit laat zien of het open of dicht is"/>
        <figcaption className="OpeningArticle__figure__figcaption">{props.img1Src ? 'De Binnentuin is open' : "De Binnentuin is dicht"}</figcaption>
      </figure>
      <figure className="OpeningArticle__figure">
        <img className="OpeningArticle__figure__img" src={props.img2Src ? './images/open-sign.png' : "./images/closed-sign.png"} alt="dit laat zien of het open of dicht is"/>
        <figcaption className="OpeningArticle__figure__figcaption">{props.imgName2 ? 'Het dakterras is open' : "Het dakterras is dicht"}</figcaption>
      </figure>
      <h2 className="OpeningArticle__h2">Openingstijd</h2>
      <h2 className="OpeningArticle__h2Time">{props.time}</h2>
    </article>
  );
}

export default Opening;
