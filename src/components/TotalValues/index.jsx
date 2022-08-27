import "./style.css";

function TotalValues({ listTransations }) {
  const reduceValue = listTransations.reduce((previousValue, currentValue) =>{
    return currentValue.type === "Entrada" ? previousValue + currentValue.value 
    : previousValue - currentValue.value
  },0)
  return (
    <div className="containerTotalValues">
      <div className="divCardValues">
        <div className="cardValues">
          <div>
            <p className="totalValue">Valor Total:</p>
          </div>

          <div>
            <p className="cashValue">
              {reduceValue.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
            </p>
          </div>
        </div>

        <div className="divNotification">
          <p>O valor se refere ao saldo</p>
        </div>
      </div>
    </div>
  );
}
export default TotalValues;
