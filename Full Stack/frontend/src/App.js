import './App.css';
import NavMeni from './komponente/NavMeni';
import Korisnici from './komponente/Korisnici';
import Prijava from './komponente/Prijava';
import Pregledi from './komponente/Pregledi';
import Kartoni from './komponente/Kartoni';
import RedCekanja from './komponente/RedCekanja';
import {  Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';

///////////////////////////////////////////////////////////////////////////////////////////////

function App() {

  let pregledi;
  let pacijenti;
  let kartoni;

  const navigate = useNavigate();
  const lokacija = useLocation();
  const [prijavljenKorisnik, setPrijavljenKorisnik] = useState();
  const [uloga, setUloga] = useState(null);

  /////////////////////////////////////////////////////////////
  //// FUNKCIJA ZA PRIJAVU
  function prijava(e) {
    e.preventDefault();
    const inpMejl = document.querySelector('#mejl').value;
    const inpLozinka = document.querySelector('#lozinka').value;


    axios.post("http://127.0.0.1:8000/api/login", {
      email: inpMejl,
      password: inpLozinka
    }).then((res) => {
      console.log(res.data);
      console.log("Uspelo!");
    }).catch((err) => {
      console.log(err);
      console.log("Nije uspelo :(");
    })
  }

  /////////////////////////////////////////////////////////////
  //// FUNKCIJA ZA ODJAVU
  function odjava() {
    setPrijavljenKorisnik(null);
    setUloga(null);
    navigate("/");
  }


  /* Prikaz NavMeni-a osim na početnoj */
  let meni = null;
  if (prijavljenKorisnik !== null && lokacija.pathname !== "/") {
    meni = <NavMeni odjava={odjava} uloga={uloga}/>;
  }

  return (
    <div className="App">
      {meni}

      <Routes>
        <Route path="/" element={<Prijava prijava={prijava} prijavljen={prijavljenKorisnik} />} />
        <Route path="/pregledi" element={prijavljenKorisnik !== null ? <Pregledi pregledi={pregledi} prijavljen={prijavljenKorisnik} uloga={uloga} /> : <Prijava prijava={prijava} />} />
        <Route path="/pacijenti" element={prijavljenKorisnik !== null ? <Korisnici pacijenti={pacijenti} prijavljen={prijavljenKorisnik} uloga={uloga}/> : <Prijava prijava={prijava} />} />
        <Route path="/kartoni" element={prijavljenKorisnik !== null ? <Kartoni kartoni={kartoni} prijavljen={prijavljenKorisnik} uloga={uloga}/> : <Prijava prijava={prijava} />} />
        <Route path="/moji-podaci" element={prijavljenKorisnik !== null ? <Korisnici prijavljen={prijavljenKorisnik} mojiP={1} /> : <Prijava prijava={prijava} />} />
        <Route path="/red-cekanja" element={prijavljenKorisnik !== null ? <RedCekanja pregledi={pregledi}/> : <Prijava prijava={prijava} />} />
        <Route path="*" element={<h2>Stranica nije pronađena (404)</h2>} />
      </Routes>
    </div>
  );
}

export default App;