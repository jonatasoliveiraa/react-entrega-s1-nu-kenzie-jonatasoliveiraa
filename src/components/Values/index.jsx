import "./style.css";
import Trash from "../../assets/Trash.svg";
import NoCard from "../../assets/NoCard.svg";
import { useState } from "react";

function Values({ listTransations, removeCard,filterCards, filteredList }) {

  const [color, setColor] = useState(false)
  const [colorEntrada, setColorEntrada] = useState(false)
  const [colorDespesa, setColorDespesa] = useState(false)
  
  function changeColor(type){
    setColor(true)
    setColorEntrada(true)
    setColorDespesa(true)
    if(type === "Todos"){
      setColorEntrada(false)
      setColorDespesa(false)
      filterCards("Todos")
    }else if(type === "Entrada"){
      setColor(false)
      setColorDespesa(false)
      filterCards("Entrada")
    }else if(type === "Despesa"){
      setColor(false)
      setColorEntrada(false)
      filterCards("Despesa")
    }
  }
  return (
    <div className="containerIndice">
      <div className="divIndice">
        <div>
          <p>Resumo Financeiro</p>
        </div>

        <div>
          <button className={ color ? "buttonDeTodos" : "buttonAll"} onClick={()=>changeColor("Todos")}>Todos</button>
          <button className={colorEntrada ? "buttonDeEntrada" : "buttonEnter"} onClick={()=>changeColor("Entrada")}>Entrada</button>
          <button className={colorDespesa ? "buttonDeDespesa" : "buttonCust"} onClick={()=>changeColor("Despesa")}>Despesa</button>
        </div>
      </div>

      <div className="containerCard">
        <ul className="listCards">
          {filteredList.length > 0 ? filteredList?.map((elem, index) => (
                <li key={index} className={elem.type === "Entrada" ? "cardMoveCash" : "cardMoveCashExpense"}>
                  <div className="cardInfos">
                    <div className="divTitleCard">
                      <p className="titleCard">{elem.description}</p>
                    </div>
                    <div>
                      <p className="valueCard">
                        {elem.value.toLocaleString("pt-br", {style: "currency",currency: "BRL",})}
                      </p>
                    </div>
                    <button onClick={() => removeCard(elem)}>
                      <img src={Trash} alt="" />
                    </button>
                  </div>

                  <div className="divTypeValue">
                    <p>{elem.type}</p>
                  </div>
                </li>
              ) 
              
            ):
            
          listTransations.length > 0 ? (
            listTransations.map((elem, index) => (
                <li key={index} className={elem.type === "Entrada" ? "cardMoveCash" : "cardMoveCashExpense"}>
                  <div className="cardInfos">
                    <div className="divTitleCard">
                      <p className="titleCard">{elem.description}</p>
                    </div>
                    <div>
                      <p className="valueCard">
                        {elem.value.toLocaleString("pt-br", {style: "currency",currency: "BRL",})}
                      </p>
                    </div>
                    <button onClick={() => removeCard(elem)}>
                      <img src={Trash} alt="" />
                    </button>
                  </div>

                  <div className="divTypeValue">
                    <p>{elem.type}</p>
                  </div>
                </li>
              ) 
              
            )
          ) : (
            <li className="cardNoValues">
              <p className="titleNoValues">Você ainda não possui nenhum lançamento</p>
              <img src={NoCard} alt="" />
              <img src={NoCard} alt="" />
              <img src={NoCard} alt="" />
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
export default Values;
