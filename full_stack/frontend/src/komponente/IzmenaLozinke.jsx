import logo from "../logoIme.png";
import { Link } from "react-router-dom";

export default function IzmenaLozinke({ izmenaLozinke }) {
  return (
    <div className="telo">
      <img src={logo} id="logo"></img>
      <div className="kontejnerForme">
        <Link to="/"> Nazad</Link>
        <h2>IZMENA LOZINKE</h2>

        <form className="forma" onSubmit={izmenaLozinke}>
          <p>Unesite mejl na koji hocete da vam se prosledi nova lozinka</p>
          <input name="email" type="email" placeholder="Unesite vas mejl" />
          <button type="submit">Posalji</button>
        </form>
      </div>
    </div>
  );
}
