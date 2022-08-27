import "./style.css";
import { useState } from "react";

function Form({ listTransations, setListTransations }) {
  
  const [inputDescription, setinputDescription] = useState("");
  const [inputType, setinpuType] = useState("Entrada");
  const [inputValue, setinpuValue] = useState();

  return (
    <div className="containerDivCard">
      <div className="divCard">
        <form onSubmit={(event) => event.preventDefault()}>
          <div className="divDescription">
            <h4>Descrição</h4>
            <input
              type="text"
              className="inputDescription"
              placeholder="Digite aqui sua descrição"
              required
              onChange={(elem) => setinputDescription(elem.target.value)}
              value={inputDescription}
            />
            <p className="exemple">Ex: Compra de roupas</p>
          </div>

          <div className="addValue">
            <div>
              <h4>Valor</h4>
              <input
                type="text"
                required
                className="inputValue"
                placeholder="R$"
                value={inputValue}
                onChange={(elem) => setinpuValue(+(elem.target.value))}
              />
            </div>

            <div>
              <h4>Tipo de valor</h4>
              <select value={inputType} onChange={(elem) => setinpuType(elem.target.value)}>
                <option value="Entrada">Entrada</option>
                <option value="Despesa">Despesa</option>
              </select>
            </div>
          </div>

          <div className="divBtn">
            <button
              type="submit"
              className="btnAddValue"
              onClick={()=>setListTransations([...listTransations,{description:inputDescription,type:inputType,value:inputValue}])}>
              Inserir Valor
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Form;
