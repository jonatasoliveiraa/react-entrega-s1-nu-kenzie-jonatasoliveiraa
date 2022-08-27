import "./style.css";
import NuKenzie2 from "../../assets/NuKenzie2.svg";
import Image from "../../assets/image.svg";

function HomePage({setIsLoggedIn}) {

  
  
  
  function handleLogin(){
    setIsLoggedIn(true)
    
}

  return (
    
    <div className="containerInitial">
      <div className="divInitial">
        <img src={NuKenzie2} alt="" />
        <p>Centralize o controle das suas finanças</p>
        <span>de forma rápida e segura</span>
        <div>
          <button onClick={handleLogin}>Iniciar</button>
        </div>
      </div>
      <div className="containerImg">
        <img src={Image} alt="" />
      </div>
    </div>
    
  );
}
export default HomePage;
