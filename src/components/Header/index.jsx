import "./style.css"
import NuKenzie from "../../assets/NuKenzie.svg";


function Header({setIsLoggedIn}) {

  function handleLogout(){
    setIsLoggedIn(false)
  }

  return (
    <header className="App-header">
      <img src={NuKenzie} alt="" />
      <button className="buttonLogout" onClick={handleLogout}>Inicio</button>
    </header>
  );
}
export default Header;
