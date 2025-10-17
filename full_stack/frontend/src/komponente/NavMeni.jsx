import { Link } from "react-router-dom";

function NavMeni({ odjava, korisnik }) {

  if (korisnik.uloga === "lekar") {
    return (
      <div className="navMeni">

        <Link to="lekar/pregledi"> Moji pregledi </Link>
        <Link to="/pacijenti"> Moji pacijenti </Link>
        <Link to="/red-cekanja"> Red čekanja </Link>
        <Link to="/moji-podaci"> Moji podaci </Link>
        <span className="licniPodaci">{korisnik.uloga}: {korisnik.ime} {korisnik.prezime}</span>
        <button onClick={odjava}> Odjavi se</button>
      </div>
    );
  } else if (korisnik.uloga === "med_osoblje") {
    return (
      <div className="navMeni">
        <Link to="/pregledi"> Moji pregledi </Link>
        <Link to="red-cekanja"> Red čekanja </Link>
        <Link to="/moji-podaci"> Moji podaci </Link>
        <span className="licniPodaci">{korisnik.uloga}: {korisnik.ime} {korisnik.prezime}</span>
        <button onClick={odjava}> Odjavi se</button>

      </div>
    );
  }
  else if (korisnik.uloga === "pacijent") {
    return (
      <div className="navMeni">
        <Link to="pacijent/pregledi"> Moji pregledi </Link>
        <Link to="/karton"> Moj karton </Link>
        <Link to="/moji-podaci"> Moji podaci </Link>
        <span className="licniPodaci">{korisnik.uloga}: {korisnik.ime} {korisnik.prezime}</span>
        <button onClick={odjava}> Odjavi se</button>
      </div>
    );
  }
}

export default NavMeni;
