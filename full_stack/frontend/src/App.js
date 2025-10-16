import "./App.css";
import NavMeni from "./komponente/NavMeni";
import Korisnici from "./komponente/Korisnici";
import Prijava from "./komponente/Prijava";
import Pregledi from "./komponente/Pregledi";
import Kartoni from "./komponente/Kartoni";
import RedCekanja from "./komponente/RedCekanja";
import Registracija from "./komponente/Registracija";
import MojiPodaci from "./komponente/MojiPodaci";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import {
  prijavaObrada,
  odjavaObrada,
  registracijaObrada,
  prikazPregledaObrada,
  prikazPacijenataObrada,
  prikazRedaObrada,
  prikazKartonaObrada,
} from "./obrada";

///////////////////////////////////////////////////////////////////////////////////////////////

function App() {
  const [pregledi, setPregledi] = useState([]);
  const [pacijenti, setPacijenti] = useState([]);
  const [redCekanja, setRedCekanja] = useState([]);
  const [karton, setKarton] = useState([]);

  const navigate = useNavigate();
  const lokacija = useLocation();
  const [prijavljenKorisnik, setPrijavljenKorisnik] = useState(null);

  useEffect(() => {
    const token = window.sessionStorage.getItem("auth_token");
  }, []);

  /////////////////////////////////////////////////////////////
  //// "Mostovi" ka funkcijama iz obrada.js
  function prijava(e) {
    prijavaObrada(e, setPrijavljenKorisnik, navigate);
  }

  function odjava() {
    odjavaObrada(setPrijavljenKorisnik, navigate);
  }

  function registracija(e) {
    registracijaObrada(e, navigate);
  }

  function prikazPregleda() {
    prikazPregledaObrada(prijavljenKorisnik, setPregledi);
  }

  function prikazPacijenata() {
    prikazPacijenataObrada(prijavljenKorisnik, setPacijenti);
  }

  function prikazReda() {
    prikazRedaObrada(setRedCekanja);
  }

  function prikazKartona() {
    prikazKartonaObrada(prijavljenKorisnik,setKarton);
  }

  /////////////////////////////////////////////////////////////
  /* Prikaz NavMeni-a osim na početnoj */
  let meni = null;
  if (prijavljenKorisnik !== null && lokacija.pathname !== "/") {
    meni = <NavMeni odjava={odjava} korisnik={prijavljenKorisnik} />;
  }

  return (
    <div className="App">
      {meni}

      <Routes>
        <Route path="/" element={<Prijava prijava={prijava} prijavljen={prijavljenKorisnik} />} />

        <Route
          path="/registracija"
          element={
            prijavljenKorisnik === null ? <Registracija registracija={registracija} /> : null
          }
        />

        <Route
          path="/pregledi"
          element={
            prijavljenKorisnik !== null ? (
              <Pregledi prikazPregleda={prikazPregleda} pregledi={pregledi} />
            ) : (
              <Prijava prijava={prijava} />
            )
          }
        />

        <Route
          path="/pacijenti"
          element={
            prijavljenKorisnik !== null ? (
              <Korisnici prikazPacijenata={prikazPacijenata} pacijenti={pacijenti} />
            ) : (
              <Prijava prijava={prijava} />
            )
          }
        />

        <Route
          path="/karton"
          element={
            prijavljenKorisnik !== null ? (
              <Kartoni
                karton={karton}
                prikazKartona={prikazKartona}
              />
            ) : (
              <Prijava prijava={prijava} />
            )
          }
        />

        <Route
          path="/moji-podaci"
          element={
            prijavljenKorisnik !== null ? (
              <MojiPodaci prijavljen={prijavljenKorisnik} />
            ) : (
              <Prijava prijava={prijava} />
            )
          }
        />

        <Route
          path="/red-cekanja"
          element={prijavljenKorisnik !== null ? <RedCekanja prikazReda={prikazReda} redCekanja={redCekanja} /> : <Prijava prijava={prijava} />}
        />

        <Route path="*" element={<h2>Stranica nije pronađena. (404)</h2>} />
      </Routes>
    </div>
  );
}

export default App;
