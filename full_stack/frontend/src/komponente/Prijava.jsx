import logo from '../logoIme.png';
import {Link} from 'react-router-dom';

export default function Prijava({ prijava }) {
  return (
    <div className="telo">

    <img src={logo} id="logo"></img>

      <div className="kontejnerForme">
        <h3>PRIJAVA</h3>
        <p> Dobro došli !</p>
       
        <form className="forma" onSubmit={prijava}>
          <input type="email" required id="mejl" placeholder="Mejl"></input>
          <input type="password" required id="lozinka" placeholder="Lozinka"></input>

            <br></br>
          <button type="submit" >Prijavite se</button>
        </form>
        <Link to="/registracija">Registrujte se </Link>

      </div>
    </div>
  );
}
