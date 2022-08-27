import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TotalValues from "./components/TotalValues";
import Values from "./components/Values";
import Header from "./components/Header";
import HomePage from "./components/HomePage";

function App() {
  const [listTransations, setListTransations] = useState([]);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [filteredList, setFilteredList] = useState([]);

  function filterCards(cardType){
    const enter = listTransations.filter((elem)=> elem.type === cardType)
    setFilteredList(enter)
  }

  function removeCard(item){
    setListTransations(listTransations.filter((elem) => elem !== item))
  }


  

  return (
    <div className="App">

      {isLoggedIn ? (
      <>
      <Header setIsLoggedIn={setIsLoggedIn}/>

        <main>
          <div className="container">
            <Form listTransations={listTransations} setListTransations={setListTransations}/>

            <TotalValues listTransations={listTransations}/>
          </div>

          <Values listTransations={listTransations} removeCard={removeCard} filterCards={filterCards} filteredList={filteredList}/>
        </main>
      </>
        ):<HomePage setIsLoggedIn={setIsLoggedIn}/>
      }
    </div>
  );
}

export default App;
