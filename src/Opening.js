import React from 'react';

const Opening = (props) => {
  return (
    <article className="OpeningArticle">
      <section className="OpeningArticle__section">
        <figure className="OpeningArticle__figure">
          <img className="OpeningArticle__figure__img" src={props.img1Src ? './images/open-sign.png' : "./images/closed-sign.png"} alt="dit laat zien of het open of dicht is"/>
          <figcaption className="OpeningArticle__figure__figcaption">{props.img1Src ? 'De Binnentuin is open' : "De Binnentuin is dicht"}</figcaption>
        </figure>
        <figure className="OpeningArticle__figure">
          <img className="OpeningArticle__figure__img" src={props.img2Src ? './images/open-sign.png' : "./images/closed-sign.png"} alt="dit laat zien of het open of dicht is"/>
          <figcaption className="OpeningArticle__figure__figcaption">{props.imgName2 ? 'Het dakterras is open' : "Het dakterras is dicht"}</figcaption>
        </figure>
      </section>
      <h2 className="OpeningArticle__h2">Openingstijd</h2>
      <h3 className="OpeningArticle__h2Time">{props.timeStart}   -   {props.timeEnd}</h3>
    </article>
  );
}

export default Opening;
