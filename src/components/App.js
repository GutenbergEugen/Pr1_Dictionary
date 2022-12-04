import { useState, useEffect } from "react";
import CardsContainer from "./CardsContainer";
import Form from "./Form";
import { words } from "../data/words"; 
import Triggers from "./Triggers";


function App() {
  const [cards, setCards] = useState(words);

  useEffect(() => {
    const data = localStorage.getItem('cards');
    setCards(JSON.parse(data));
  }, []); // при загрузке страницы карточки будут прогружаться из localStorage, второй аргумент - стейт отслеживать не нужно, т.к. функция выполняется один раз при загрузке страницы

  useEffect(() => {
    localStorage.setItem('cards', JSON.stringify(cards))
  }, [cards]); // сохраняем из стейта в localStorage, второй аргумент отслеживает изменение стейта

  const addCard = (eng, rus) => setCards([
    ...cards, 
    {
      id: Date.now(),
      eng,
      rus,
      lang: 'eng'
    }
  ]);

  const change_to_eng = () => {
    setCards(cards.map(elem => {elem.lang = 'eng';
      return elem
    }));
  }

  const change_to_rus = () => {
    setCards(cards.map(elem => {elem.lang = 'rus';
      return elem
    }));
  }

  const change_lang = (id) => {
    setCards(cards.map(el => {
      if(el.id === id) {
        el.lang = el.lang === 'rus' ? 'eng' : 'rus'
      }
      return el
    }))
  }

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#2f4f4f'
  }
  
  return (
    <div>
      <container style={containerStyle}>
        <Form add={addCard}/> 
        <Triggers change_to_eng = {change_to_eng} change_to_rus = {change_to_rus}/>
      </container>
      <CardsContainer cards={cards} change={change_lang}/>
    </div>
  );
}

export default App;
