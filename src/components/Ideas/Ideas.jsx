import React, { useEffect, useState } from 'react';

import './Ideas.css';
import CardIdeaList from '../CardIdeaList/CardIdeaList';
import CardIdea from '../CardIdea/CardIdea';
import { Link } from 'react-router-dom';
import * as mainApi from "../../utils/MainApi";



function Ideas(props) {
  const [randomCardIdea, setRandomCardIdea] = useState({});
  const [cardList, setCardList] = useState([]);
  const [like, setLike] = useState(false);
  const [disLike, setDisLike] = useState(false);

  useEffect(() => {
    mainApi.getCards()
      .then((cards) => {
        setCardList(cards)
        const randomIndex = Math.floor(Math.random() * cards.length);
        const randomCard = cards[randomIndex];
        setRandomCardIdea(randomCard)
      })
      .catch((err) => console.log(err))

  }, [like, disLike, setLike, setDisLike])

  function handleLike() {
    mainApi.likeCard(randomCardIdea._id)
      .then(() => {
        setLike(!like)
      })
      .catch((err) => {
        console.error(`Ошибка: ${err}`)
      })
  }

  function handleDislike() {
    mainApi.dislikeCard(randomCardIdea._id)
      .then(() => {
        setDisLike(!disLike)
      })
      .catch((err) => {
        console.error(`Ошибка: ${err}`)
      })
  }

  return (
    <div className="ideas">
      <p className="ideas__title">{randomCardIdea.title}</p>
      <div className="ideas__buttons">
        <button
          className="ideas__button_type ideas__button_type_like"
          onClick={handleLike}
        >  
        </button>
        <button
          className="ideas__button_type ideas__button_type_dislike"
          onClick={handleDislike}
        >  
        </button>
      </div>
      {/* <CardIdeaList cardIdeaList={cardList}/> */}
      <CardIdeaList />
      <Link to="/" className="ideas__nav-back">Вернуться к началу</Link>
    </div>
  )
}

export default Ideas;
