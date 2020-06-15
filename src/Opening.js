import React from 'react';

const Opening = (props) => {
  return (
    <article className="OpeningArticle">
      <figure className="OpeningArticle__figure">
        <img className="OpeningArticle__figure__img" src={props.img1Src} alt="dit laat zien of het open of dicht is"/>
        <figcaption className="OpeningArticle__figure__figcaption">{props.imgName1}</figcaption>
      </figure>
      <figure className="OpeningArticle__figure">
        <img className="OpeningArticle__figure__img" src={props.img2Src} alt="dit laat zien of het open of dicht is"/>
        <figcaption className="OpeningArticle__figure__figcaption">{props.imgName2}</figcaption>
      </figure>
      <h2 className="OpeningArticle__h2">Openingstijd</h2>
      <h2 className="OpeningArticle__h2">{props.time}</h2>
    </article>
  );
}

export default Opening;
