import React from "react";
import { useState } from "react";
import CardPromo from "../CardPromo/CardPromo";
import Img1 from '../../images/pic1.svg'
import Img2 from '../../images/pic2.svg'
import Img3 from '../../images/pic3.svg'
import Img4 from '../../images/pic4.svg'
import Img5 from '../../images/pic5.svg'
import ImgMobile1 from '../../images/VectorMobile2.svg'
import ImgMobile2 from '../../images/VectorMobile1.svg'
import ImgMobile3 from '../../images/VectorMobile3.svg'
import ImgMobile4 from '../../images/VectorMobile4.svg'

import './Promo.css'
import FormIdea from "../FormIdea/FormIdea";
import { Link } from "react-router-dom";

function Promo(props) {
  const [emailValue, setEmailValue] = useState("");
  // const emailPlaceholder = emailValue === "" ? "" : "Напиши свою почту, а мы пришлем результаты обработки твоей идеи нашим ИИ:";
  const emailPlaceholder = "Напиши свою почту, а мы пришлем результаты обработки твоей идеи нашим ИИ:";
  const promoData = [
    {
      id: 1,
      textStart: "Набор",
      textBold: "идей",
      textEnd: "для бизнеса сгенерированных специально для тебя",
      crossedPrice: "399",
      actualPrice: "199",
      image: Img1,
      imageMobile: ImgMobile1,
    },
    {
      id: 2,
      textStart: "Проблемное",
      textBold: "интервью",
      textEnd: "с потенциальными клиентами",
      crossedPrice: "8999",
      actualPrice: "3899",
      image: Img2,
      imageMobile: ImgMobile2,
    },
    {
      id: 3,
      textStart: "Подбор",
      textBold: "сотрудников",
      textEnd: "для твоего бизнеса",
      crossedPrice: "1299",
      actualPrice: "1199",
      image: Img3,
      imageMobile: ImgMobile3,
    },
    {
      id: 4,
      textStart: "Разработка детального",
      textBold: "бизнес плана",
      textEnd: "с помощью ИИ",
      crossedPrice: "14699",
      actualPrice: "11999",
      image: Img4,
      imageMobile: ImgMobile4,
    },
    {
      id: 5,
      textStart: "Генерация",
      textBold: "рекламных",
      textEnd: "материалов с помощью ИИ",
      crossedPrice: "6666",
      actualPrice: "4599",
      image: Img5,
      imageMobile: ImgMobile2,
    },
  ];

  const renderedCards = promoData.map((data, index) => (
    <CardPromo
      key={index}
      id={data.id}
      textStart={data.textStart}
      textBold={data.textBold}
      textEnd={data.textEnd}
      crossedPrices={data.crossedPrice}
      actualPrices={data.actualPrice}
      ImageCards={props.isShowModal ? data.imageMobile : data.image }
    />
  ));

  return (
    <div className="promo">
      <p className="promo__title">
        Выбери промокод на какой из наших продуктов тебе прислать:
      </p>
      
      <div className="promo__cards-list">
        {renderedCards}
      </div>
      <span className="promo__label">
        {emailPlaceholder}
      </span>
      <FormIdea
        value={emailValue}
        // onCheckIdea={handleCheckIdea}
        onChangeInput={(e) => setEmailValue(e.target.value)}
      ></FormIdea>
      <Link to="/" className="ideas__nav-back">Вернуться к началу</Link>
    </div>
  );
}

export default Promo;